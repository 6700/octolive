class GithubWorker
  include Sidekiq::Worker

  def perform(*_args)
    User.find_each do |user|
      GithubInteractor.new(user).tap do |t|
        t.update_user_repositories
        t.update_pull_requests
        #t.update_issues
      end
    end
  end
end
