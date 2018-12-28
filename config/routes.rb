Rails.application.routes.draw do

  resources :track_categories
  resources :track_resources
	root 'api/tracks#index'
	
	namespace :api do
	  resources :categories
		resources :sources
		resources :resources
		resources :tracks
		resources :activities
  	resources :track_activities
  	resources :track_resources
	end
end
