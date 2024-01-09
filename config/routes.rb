Rails.application.routes.draw do
  get 'users/profile'
  devise_for :users, controllers: { registrations: 'users/registrations', sessions: 'users/sessions' }
  get '/u/:id', to: 'users#profile', as: 'user'
  resources :posts do
    resources :comments
  end
  get 'about', to: 'pages#about'
  get "up" => "rails/health#show", as: :rails_health_check
  root "posts#index"
end
