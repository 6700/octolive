class Event < ApplicationRecord
  belongs_to :user

  scope :inbox, -> { all }
  scope :archived, -> { all }
  scope :pending, -> { all }
  scope :important, -> { all }
  scope :releases, -> { all }
  scope :pull_requests, -> { all }
  scope :mentions, -> { all }
  scope :issues, -> { all }
  scope :unread, -> { where(read: false) }

  def action
    action_type.camelize.constantize.find(action_id)
  end

  def repo_name
    action.repository.full_name
  end
end
