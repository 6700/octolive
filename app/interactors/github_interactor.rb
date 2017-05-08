class GithubInteractor
  attr_accessor :user, :service

  def initialize(user)
    @user = user
  end

  def update_user_repositories
    service.repositories(user.last_repository_update).each do |repository|
      check_collaborators_for(update_repository(repository))
    end
    flush_renew_data
  end

  def update_pull_requests
    check_availability
    user.repositories.find_each do |repository|
      check_availability
      service.pull_requests(repository.full_name).each do |pull_request|
        PullRequest.sync_by({ uid: pull_request.id }, {
          number: pull_request.number,
          title: pull_request.title,
          body: pull_request.body,
          repository: repository
        })
      end
      flush_renew_data
    end
    flush_renew_data
  end

  def check_availability
    return if user.can_request?
    flush_renew_data
    user.save
    raise RateLimitExceded
  end

  def check_collaborators_for(repository)
    Collaboration.find_or_create_by(user: user, repository: repository)
  end

  def update_repository(repository)
    Repository.find_or_initialize_by(uid: repository["id"]).tap do |r|
      r.assign_attributes(
        name: repository["name"],
        url: repository["html_url"],
        owner: update_owner(repository["owner"])
      )
      r.save if r.changed?
    end
  end

  def update_owner(owner)
    Owner.sync_by({ uid: owner["id"] }, {
      avatar_url: owner["avatar_url"],
      name: owner["login"],
      type: owner["type"].downcase
    })
  end

  def flush_renew_data
    return if service.last_response.nil?
    user.update_attributes(last_update: Time.zone.now)
    user.assign_attributes(
      remaining_rate: service.last_response.headers['x-ratelimit-remaining'],
      next_rate_reset: Time.at(service.last_response.headers['x-ratelimit-reset'].to_i),
    )
  end

  def service
    @service ||= GithubService.new(user.access_token)
  end

  class RateLimitExceded < StandardError; end
end
