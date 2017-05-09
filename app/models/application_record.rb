class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.sync_by(find_attributes, update_attributes)
    self.find_or_initialize_by(find_attributes).tap do |r|
      r.assign_attributes(update_attributes)
      r.save if r.changed?
      Rails.logger.info r.errors unless r.valid?
    end
  end

  def update_if_changed(attributes)
    assign_attributes(attributes)
    save if changed?
  end
end
