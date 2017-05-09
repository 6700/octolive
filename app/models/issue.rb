class Issue < ApplicationRecord
  belongs_to :repository

  delegate :users, to: :repository

  after_create :create_events

  def create_events
    users.each do |user|
      Event.create(
        action_type: :issue,
        action_id: id,
        subtype: :created,
        message: "Issue ##{number}: #{title}",
        user: user
      )
    end
  end
end
