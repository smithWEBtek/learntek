class Api::TracksController < ApplicationController
before_action :set_track, only: [:show, :update, :destroy]

	def index
		@tracks = Track.all
		render json: @tracks
	end

	def show
		render json: @track
	end

	def create
		@track = Track.new(track_params)
		if @track.save
			render json: @track
		else
			render json: { errors: { message: 'track NOT created' }}
		end
	end

	def update
		@track.update(track_params)
		if @track.save
			render json: @track
		else
			render json: { errors: { message: 'track NOT updated' }}
		end
	end

	def destroy
		@track.delete
		render json: { message: 'track deleted' }
	end
	
	private
		def set_track
			@track = Track.find(params[:id])
		end

		def track_params
			params.require(:track).permit(:name, :description, :category_id, :status, :start_date, :goal_date)
		end
end
