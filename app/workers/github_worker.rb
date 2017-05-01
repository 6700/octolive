class GithubWorker
  include Sidekiq::Worker

  def perform(*_args)
    User.find_each do |user|
      GithubInteractor.new(user).update_user_repositories
    end
  end
end
