class Category < ApplicationRecord
	has_many :resources
	has_many :tracks
end
