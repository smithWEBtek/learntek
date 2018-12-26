Rails.application.routes.draw do

	resources :api do 
	  resources :categories
		resources :sources
		resources :resources
		resources :tracks
		resources :activities
  	resources :track_activities
		resources :goals
	end
end
