Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'greeting', to: 'greeting#index'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
