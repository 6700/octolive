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

  def check_collaborators_for(repository)
    Collaboration.find_or_create_by(user: user, repository: repository)
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
    Owner.find_or_initialize_by(uid: owner.id).tap do |s|
      s.assign_attributes(
        avatar_url: owner.avatar_url,
        name: owner.login,
        type: owner.type.downcase
      )
      s.save if s.changed?
    end
  end

  def service
    @service ||= GithubService.new(user.access_token)
  end
end