class PullRequest < ApplicationRecord
  belongs_to :repository
  delegate :users, to: :repository

  after_create :create_events
  after_update :create_close_events, if: :state_changed?

  validates :uid, uniqueness: true

  def create_events
    users.each do |user|
      return unless state.to_s.to_sym == :open
      Event.create(
        action_type: :pull_request,
        action_id: id,
        subtype: :created,
        message: "Open pull request ##{number}: #{title}",
        user: user
      )
    end
  end

  def create_close_events
    return unless state.to_sym == :closed
    users.each do |user|
      Event.create(
        action_type: :issue,
        action_id: id,
        subtype: :closed,
        message: "Closed pull request ##{number}: #{title}",
        user: user
      )
    end
  end
end
