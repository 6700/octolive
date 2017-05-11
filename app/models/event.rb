class Event < ApplicationRecord
  belongs_to :user

  scope :inbox, -> { all }
  scope :archived, -> { all }
  scope :pending, -> { all }
  scope :important, -> { all }
  scope :releases, -> { all }
  scope :pull_requests, -> { where(action_type: :pull_request) }
  scope :mentions, -> { all }
  scope :issues, -> { where(action_type: :issue) }
  scope :unread, -> { where(read: false) }

  def action
    action_type.camelize.constantize.find(action_id)
  end

  def repo_name
    action.repository.full_name
  end
end
