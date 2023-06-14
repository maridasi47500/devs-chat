Rails.application.routes.draw do
  resources :programminglanguages
  resources :rooms
  resources :messages
  devise_for :users
  root "rooms#index"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
