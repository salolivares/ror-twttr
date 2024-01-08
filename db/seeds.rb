# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create(email: "sal@test.com", name: 'sal', password: 'password', password_confirmation: 'password')
User.create(email: "test@test.com", name: 'test', password: 'password', password_confirmation: 'password')

5.times do |x|
  Post.create(title: "Post #{x}", body: "This is the body of post #{x}", user_id: User.first.id)
end

5.times do |x|
  Post.create(title: "Post #{x}", body: "This is the body of post #{x}", user_id: User.second.id)
end
