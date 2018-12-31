class TrackResourceSerializer < ActiveModel::Serializer
	attributes :id, :track_id, :resource_id
	belongs_to :track
	belongs_to :resource
end
