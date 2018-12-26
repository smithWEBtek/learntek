class Api::ResourcesController < ApplicationController
	before_action :set_resource, only: [:show, :update, :destroy]
	
		def index
			@resources = Resource.all
			render json: @resources
		end
	
		def show
			render json: @resource
		end
	
		def create
			@resource = Resource.new(resource_params)
			if @resource.save
				render json: @resource
			else
				render json: { errors: { message: 'resource NOT created' }}
			end
		end
	
		def update
			@resource.update(resource_params)
			if @resource.save
				render json: @resource
			else
				render json: { errors: { message: 'resource NOT updated' }}
			end
		end
	
		def destroy
			@resource.delete
			render json: { message: 'resource deleted' }
		end
		
		private
			def set_resource
				@resource = Resource.find(params[:id])
			end
	
			def resource_params
				params.require(:resource).permit(:name, :description, :format, :url, :category_id)
			end
	end
	