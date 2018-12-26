class ResourceSerializer < ActiveModel::Serializer
	attributes :id, :public_id, :url, :secure_url, :width, :height, :format
	belongs_to :category
	belongs_to :source
end
