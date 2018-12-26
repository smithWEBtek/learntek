class Activity < ApplicationRecord
	has_many :track_activities
	has_many :tracks, through: :track_activities
end
