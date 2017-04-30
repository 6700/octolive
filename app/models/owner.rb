class Owner < ApplicationRecord
  Owner.inheritance_column = :owner_type

  enum type: { user: 0, organization: 1 }
end
