class Category < ApplicationRecord
	has_many :resources
	has_many :sources
end
