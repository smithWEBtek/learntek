class TrackSerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :category_id

	has_many :resources
	has_many :sources, through: :resources
	has_many :activities
end
