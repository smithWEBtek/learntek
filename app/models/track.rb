class Track < ApplicationRecord
	belongs_to :category
	has_many :track_resources
	has_many :resources, through: :track_resources

	has_many :categories, through: :resources
	has_many :track_activities
	has_many :activities, through: :track_activities
end
