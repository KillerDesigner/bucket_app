BucketApp::Application.routes.draw do
  get "bucket_items/index"

  resources :bucket_items
end
