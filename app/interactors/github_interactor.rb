class GithubInteractor
  attr_accessor :user, :service

  def initialize(user)
    @user = user
  end

  def update_user_repositories
    service.repositories.each do |repository|
      check_collaborators_for(update_repository(repository))
    end
  end

  def update_pull_requests
    user.repositories.find_each do |repository|
      service.pull_requests(repository.full_name).each do |pull_request|
        PullRequest.sync_by({ uid: pull_request.id }, {
          number: pull_request.number,
          title: pull_request.title,
          body: pull_request.body,
          repository: repository
        })
      end
    end
  end

  def check_collaborators_for(repository)
    Collaboration.find_or_create_by(user: user, repository: repository)
  end

  def update_events_with_notifications
    service.notifications.each do |notification|
      Event.find_or_initialize_by(uid: notification.id).update(
        action_type: notification.reason,
        message: notification.subject.title,
        repo_name: notification.repository.full_name,
        user: user
      )
    end
  end

  def update_repository(repository)
    Repository.find_or_initialize_by(uid: repository.id).tap do |r|
      r.assign_attributes(
        name: repository.name,
        url: repository.html_url,
        owner: update_owner(repository.owner)
      )
      r.save if r.changed?
    end
  end

  def update_owner(owner)
    Owner.sync_by({uid: owner.id}, {
      avatar_url: owner.avatar_url,
      name: owner.login,
      type: owner.type.downcase
    })
  end

  def service
    @service ||= GithubService.new(user.access_token)
  end
end
