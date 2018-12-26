class Track < ApplicationRecord
	has_many :resources
	has_many :sources, through: :resources
	has_many :activities
end
