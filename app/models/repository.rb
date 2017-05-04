class Repository < ApplicationRecord
  belongs_to :owner
  has_many :collaborations
  has_many :users, through: :collaborations

  def full_name
    "#{owner.name}/#{name}"
  end
end
