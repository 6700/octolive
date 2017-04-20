class GithubInteractor
  attr_accessor :user, :service

  def initialize user
    @user = user
  end

  def update_user_repositories
    service.repositories.each do |repository|
      update_owner repository.owner
    end
  end

  def update_owner owner
    Owner.find_or_initialize_by(uid: owner.id).update(
      avatar_url: owner.avatar_url,
      name: owner.login,
      type: owner.type.downcase
    )
  end

  def service
    @service ||= GithubService.new(user.access_token)
  end
end