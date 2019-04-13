Rails.application.routes.draw do
  namespace :api do
    resources :contacts, except: [:new, :edit] do
      resources :wires, except: [:new, :edit]
    end
  end
end
