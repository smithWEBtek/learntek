class TrackActivitySerializer < ActiveModel::Serializer
	attributes :id, :track_id, :activity_id
	belongs_to :track
	belongs_to :activity
end
