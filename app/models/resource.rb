class Resource < ApplicationRecord
	belongs_to :category
	has_many :track_resources
	has_many :tracks, through: :track_resources

end