Rails.application.routes.draw do
  resources :urls
  resources :users

  get '/login' => 'session#new'
  post '/login'  => 'session#create'
  get '/logout'  => 'session#destroy'
  get '/u/:id' => 'urls#visit'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "urls#index"
end
