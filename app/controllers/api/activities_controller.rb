class Api::ActivitiesController < ApplicationController
	
	before_action :set_activity, only: [:show, :update, :destroy]
		
	def index
		@activities = Activity.all 
		render json: @activities
	end

	def show
		render json: @activity
	end

	def create
		@activity = Activity.new(activity_params)
		if @activity.save
			render json: @activity
		else
			render json: { errors: { message: 'activity NOT created' }}
		end
	end

	def update
		@activity.update(activity_params)
		if @activity.save
			render json: @activity
		else
			render json: { errors: { message: 'activity NOT updated' }}
		end
	end

	def destroy
		@activity.delete
		render json: { message: 'activity deleted' }
	end	

	private
		def set_activity
			@activity = Activity.find(params[:id])
		end

		def activity_params
			params.require(:activity).permit(:name, :description, :status)
		end
end
	