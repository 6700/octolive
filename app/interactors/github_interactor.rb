class GithubInteractor
  attr_accessor :user, :service

  def initialize(user)
    @user = user
  end

  def update_user_repositories
    repositories = service.repositories(user.last_repositories_etag)
    if repositories.code != 304
      repositories.each do |repository|
        check_collaborators_for(update_repository(repository))
      end
      user.update(last_repositories_etag: service.last_response.headers["etag"])
    end
    flush_renew_data
  end

  def update_pull_requests
    check_availability
    user.repositories.includes(:owner, :pull_requests).find_each do |repository|
      check_availability
      service.pull_requests(repository.full_name, repository.last_pull_requests_etag).tap do |pull_requests|
        if pull_requests.code != 304 && pull_requests.code != 404
          pull_requests.each do |pull_request|
            PullRequest.sync_by({ uid: pull_request["id"] }, {
              number: pull_request["number"],
              title: pull_request["title"],
              body: pull_request["body"],
              repository: repository,
              state: pull_request['state'],
              link: pull_request['html_url']
            })
          end
        end
      end
      repository.update_if_changed(last_pull_requests_etag: service.last_response.headers["etag"])
      flush_renew_data
    end
    flush_renew_data
  end

  def update_issues
    check_availability
    user.repositories.includes(:owner).find_each do |repository|
      check_availability
      service.issues(repository.full_name, repository.last_issues_etag).tap do |issues|
        if issues.code != 304 && issues.code != 404
          issues.each do |issue|
            next if issue.has_key? 'pull_request'
            Rails.logger.info issue
            Issue.sync_by({ uid: issue["id"] }, {
              number: issue["number"],
              repository: repository,
              title: issue["title"],
              body: issue["body"],
              state: issue['state'],
              link: issue['title']
              })
          end
        end
      end
      repository.update_if_changed(last_issues_etag: service.last_response.headers["etag"])
      flush_renew_data
    end
    flush_renew_data
  end

  private

  def service
    @service ||= GithubService.new(user.access_token)
  end

  def check_collaborators_for(repository)
    Collaboration.find_or_create_by(user: user, repository: repository)
  end

  def flush_renew_data
    return if service.last_response.nil?
    user.assign_attributes(
      remaining_rate: service.last_response.headers['x-ratelimit-remaining'],
      next_rate_reset: Time.at(service.last_response.headers['x-ratelimit-reset'].to_i),
    )
  end

  def check_availability
    return if user.can_request?
    flush_renew_data
    user.save if user.changed?
    raise RateLimitExceded
  end

  def update_owner(owner)
    Owner.sync_by({ uid: owner["id"] }, {
      avatar_url: owner["avatar_url"],
      name: owner["login"],
      type: owner["type"].downcase
    })
  end

  def update_repository(repository)
    Repository.sync_by({uid: repository["id"]}, {
      name: repository["name"],
      url: repository["html_url"],
      owner: update_owner(repository["owner"])
    })
  end

  class RateLimitExceded < StandardError; end
end
