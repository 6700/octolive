class Repository < ApplicationRecord
  belongs_to :owner
  has_many :collaborations, dependent: :destroy
  has_many :users, through: :collaborations
  has_many :issues, dependent: :destroy
  has_many :pull_requests, dependent: :destroy

  def full_name
    "#{owner.name}/#{name}"
  end
end
