class ResourceSerializer < ActiveModel::Serializer
	attributes :id, :name, :description, :format, :url, :category_id
	belongs_to :category
end
