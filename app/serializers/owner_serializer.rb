class OwnerSerializer < ActiveModel::Serializer
  attributes :id, :avatar_url, :name, :type
end
