class GithubWorker
  include Sidekiq::Worker

  def perform(*args)
    # TODO: Iterate over users and send it to interactor
    User.find_each do |user|
      GithubInteractor.new(user).update_user_repositories
    end
  end
end
