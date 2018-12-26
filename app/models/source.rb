class Source < ApplicationRecord
	belongs_to :category
	has_many :resources
end
