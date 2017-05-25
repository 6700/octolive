Rails.application.routes.draw do
  resources :users, only: [] do
    collection do
      scope :auth do
        get '/:provider/callback', action: :callback, constraints: { provider: /github/ }
        get '/:provider/redirect', action: :redirect, constraints: { provider: /github/ }
      end
    end
  end

  namespace :api do
    namespace :v1 do
      resources :repositories, only: [:index]
      resources :notifications, only: [:index] do
        #[:inbox, :archived, :pending, :important, :releases, :pull_requests, :mentions, :issues]
      end
      resources :feeds, only: [:index] do
        get :read
        get :archive
      end

      resources :users, only: [] do
        collection do
          get :me
        end
      end
    end
  end
end
