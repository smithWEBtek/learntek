class Api::TrackActivitiesController < ApplicationController

	def index
		@track_activities = TrackActivity.all
		render json: @track_activities
	end
end
