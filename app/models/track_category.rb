class TrackCategory < ApplicationRecord
	belongs_to :track 
	belongs_to :category
end
