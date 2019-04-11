Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, format: {default: :json} do
    resources :users, only: [:create, :show]
    resources :restaurants, only: [:show, :index]
    resources :recommended_restaurants, only: [:index]
    resource :session, only: [:create, :destroy]
    resources :reservations, only: [:create, :destroy]
    resources :saved_restaurants, only: [:create, :destroy]
    resources :reviews, only: [:create, :update, :destroy]
  end
end
