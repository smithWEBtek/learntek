class Resource < ApplicationRecord
	belongs_to :category
	
	validates_uniqueness_of :public_id

	def self.getCloudinaryResources
		result = {}
		response = Cloudinary::Api.resources(resource: 'image', format: 'pdf', max_results: 500)		
		response['resources'].each do |resource|
			if !Resource.find_by_public_id(resource["public_id"])
				Resource.create(
					category_id: 1, 
					public_id: resource["public_id"].gsub('.pdf', ''), 
					width: 	resource["width"],
					height: resource["height"],
					format: resource["format"],
					url: resource["url"],
					secure_url: resource["secure_url"])
			end
		end
		result['cloud_resource_count'] = response['resources'].count
		result['db_resource_count'] = Resource.count
		result
	end
end
