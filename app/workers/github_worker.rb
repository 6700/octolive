class GithubWorker
  include Sidekiq::Worker

  def perform(*_args)
    User.find_each do |user|
      GithubInteractor.new(user).tap do |t|
        t.update_user_repositories
        t.update_events_with_notifications
      end
    end
  end
end
