class GithubWorker
  include Sidekiq::Worker

  def perform(*args)
    # TODO: Iterate over users and send it to interactor
    GithubInteractor.new().update_user_repositories
  end
end
