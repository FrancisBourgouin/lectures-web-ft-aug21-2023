json.extract! author, :id, :email, :name, :profile_url, :password, :created_at, :updated_at
json.url author_url(author, format: :json)
