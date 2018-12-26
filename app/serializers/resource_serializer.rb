class ResourceSerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :format, :url, :category_id, :public_id, :secure_url,  :width,  :height
	belongs_to :category
end
