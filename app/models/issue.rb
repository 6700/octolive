class Issue < ApplicationRecord
  belongs_to :repository

  delegate :users, to: :repository

  after_create :create_events
  after_update :create_close_events, if: :state_changed?

  def create_events
    users.each do |user|
      Event.create(
        action_type: :issue,
        action_id: id,
        subtype: :created,
        message: "Open issue ##{number}: #{title}",
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
        message: "Closed issue ##{number}: #{title}",
        user: user
      )
    end
  end
end
