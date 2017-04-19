class GithubInteractor
  attr_accessor :user, :service

  def initialize
    # TODO: set user
    @user = 1
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
    # Send credentials of the user to the service
    @service ||= GithubService.new()
  end
end