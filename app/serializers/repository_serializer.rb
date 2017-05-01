class RepositorySerializer < ActiveModel::Serializer
  attributes :id, :url, :name

  belongs_to :owner
end
