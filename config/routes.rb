Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api, defaults: {format: :json} do 
    resource :session, only: [:create, :show, :destroy]
    resources :users, only: [:create, :show, :update, :index]
    resources :posts, only: [:index, :show, :create, :update, :destroy]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
  end

  get '*path', to: "static_pages#frontend_index"
end
