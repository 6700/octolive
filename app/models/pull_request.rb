class PullRequest < ApplicationRecord
  belongs_to :repository
  delegate :users, to: :repository

  after_create :create_events
  after_update :create_close_events, if: :state_changed?
  after_update :create_merge_events, if: :state_changed?

  validates :uid, uniqueness: true

  def create_events
    return unless state.to_s.to_sym == :open
    users.each do |user|
      Event.create(
        action_type: :pull_request,
        action_id: id,
        subtype: :created,
        message: "Open pull request ##{number}: #{title}",
        user: user,
        link: link
      )
    end
  end

  def create_merge_events
    return unless state.to_sym == :merged
    users.each do |user|
      Event.create(
        action_type: :pull_request,
        action_id: id,
        subtype: :merged,
        message: "Merged pull request ##{number}: #{title}",
        user: user,
        link: link
      )
    end
  end

  def create_close_events
    return unless state.to_sym == :closed
    users.each do |user|
      Event.create(
        action_type: :pull_request,
        action_id: id,
        subtype: :closed,
        message: "Closed pull request ##{number}: #{title}",
        user: user,
        link: link
      )
    end
  end
end
