class CategorySerializer < ActiveModel::Serializer
	attributes :id, :name
	has_many :resources
	has_many :tracks
end
