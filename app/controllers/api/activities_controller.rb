class Api::ActivitiesController < ApplicationController

	def index
		@activities = Activity.all 
		respond(:index, @activities)
	end
end
