class Owner < ApplicationRecord
  Owner.inheritance_column = :owner_type

  has_many :repositories, dependent: :destroy
  has_many :issues, dependent: :destroy

  enum type: { user: 0, organization: 1 }
end
