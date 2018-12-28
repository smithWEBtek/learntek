class TrackSerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :category_id, :status, :start_date, :goal_date
	belongs_to :category
	has_many :track_resources
	has_many :resources, through: :track_resources
	has_many :track_activities
	has_many :activities, through: :track_activities
end
