class Issue < ApplicationRecord
  belongs_to :owner
  belongs_to :asignee, class_name: :Owner
end
