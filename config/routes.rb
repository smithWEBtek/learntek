Rails.application.routes.draw do

  resources :categories
  resources :track_activities
  resources :sources
  resources :activities
  resources :tracks
  resources :goals
end
