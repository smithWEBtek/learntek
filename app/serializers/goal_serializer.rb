class GoalSerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :status, :start_date, :goal_date
	has_many :tracks
	has_many :resources
	has_many :sources
	has_many :activities
end
