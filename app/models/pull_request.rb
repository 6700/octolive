class PullRequest < ApplicationRecord
  belongs_to :repository
  delegate :users, to: :repository

  after_create :create_events

  validates :uid, uniqueness: true

  def create_events
    users.each do |user|
      Event.create(
        action_type: :pull_request,
        action_id: id,
        subtype: :created,
        message: "Pull request ##{number}: #{title}",
        user: user
      )
    end
  end
end
