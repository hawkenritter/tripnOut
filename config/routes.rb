Rails.application.routes.draw do
  # devise_for :users

  resources :trips
  resources :sessions, only: [:create, :destroy]
end
