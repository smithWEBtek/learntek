class ActivitySerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :status
	has_many :track_activities
	has_many :tracks, through: :track_activities
end
