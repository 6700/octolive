module Actualizable
  extend ActiveSupport::Concern

  included do
    def reset_actualizable_fields!
      self.class.actualizable_fields.each do |actualizable_field|
        assign_attributes(actualizable_field => '')
      end 
      save
    end
    def self.actualizable_fields
      @@actualizable_fields ||= []
    end

    def self.acts_as_actualizable *field
      actualizable_fields.push(*field)
    end
  end
end