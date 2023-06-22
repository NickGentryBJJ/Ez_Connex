# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# db/seeds.rb

# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    demo_user = User.create!(
      first_name: 'Demo',
      last_name: 'lition', 
      title: 'Wrecking Ball',
      email: 'demo@email.io', 
      password: 'password'
    )

    post1 = Post.create!({
      id: 1,
      body: 'First Post',
      author_id: 1
    })

    post2 = Post.create!({
      id: 2,
      body: 'Second Post',
      author_id: 1
    })

    post3 = Post.create!({
      id: 3,
      body: 'Third Post',
      author_id: 1
    })
    
  
    puts "Done!"
  # end