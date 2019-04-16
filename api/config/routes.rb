Rails.application.routes.draw do
  namespace :api do
    resources :contacts, except: [:new, :edit]
  end
end
