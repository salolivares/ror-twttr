Rails.application.routes.draw do
  get 'about', to: 'pages#about'
  get "up" => "rails/health#show", as: :rails_health_check
  root "pages#home"
end
