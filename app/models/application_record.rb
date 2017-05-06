class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.sync_by(find_attributes, update_attributes)
    self.find_or_initialize_by(find_attributes).tap do |r|
      r.assign_attributes(update_attributes)
      r.save if r.changed?
    end
  end
end
