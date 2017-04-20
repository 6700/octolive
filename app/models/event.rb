class Event < ApplicationRecord
  belongs_to :action, polymorphic: true
  belongs_to :user
end
