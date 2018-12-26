class SourceSerializer < ActiveModel::Serializer
	attributes :id, :name, :url, :description
	belongs_to :category
	has_many :resources
end
