class Api::TrackResourcesController < ApplicationController

	def index
		@track_resources = TrackResource.all
	 	render json: @track_resources
	end
end
