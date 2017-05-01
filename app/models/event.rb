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
end
