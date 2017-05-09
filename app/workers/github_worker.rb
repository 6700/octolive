class GithubWorker
  include Sidekiq::Worker

  def perform(*_args)
    User.includes(:repositories).find_each do |user|
      begin
        GithubInteractor.new(user).tap do |t|
          t.update_user_repositories
          t.update_pull_requests
          t.update_issues
          t.user.save if t.user.changed?
        end
      rescue GithubInteractor::RateLimitExceded => e
        e
      end
    end
  end
end
