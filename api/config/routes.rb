Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # get '/health_check', to: 'health_checks#index'
  get '/', to: 'health_checks#index'
  # 記事一覧
  get '/blogs', to: 'blogs#index'
  # 記事詳細
  get '/blogs/:id', to: 'blogs#show'
  # 記事作成
  post '/blogs', to: 'blogs#create'
end
