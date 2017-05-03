class Repository < ApplicationRecord
  belongs_to :owner

  def full_name
    "#{owner.name}/#{name}"
  end
end
