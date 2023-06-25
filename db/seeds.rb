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
    ApplicationRecord.connection.reset_pk_sequence!('posts')
    
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    demo_user = User.create!(
      first_name: 'Demo',
      last_name: 'lition', 
      title: 'Wrecking Ball',
      email: 'demo@email.io', 
      password: 'password'
      
    )

    siegmeyer = User.create!(
      first_name: 'Siegmeyer',
      last_name: 'Of Catarina',
      title: 'Knight of Catarina',
      email: 'onionbro@catarina.com',
      password: 'password'
    )

    siegmeyer.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/siegmeyer.jpg'), filename: 'siegmeyer.jpg')
    demo_user.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/wreckingball.png'), filename: 'wreckingball.png')

    
    puts "Creating Posts Bitch..."

    post1 = Post.create!({
      id: 900,
      body: 'Felt cute... Might delete later 😜',
      user_id: 1
      })
      
      post2 = Post.create!({
        id: 901,
        body: 'Another day of destrution!',
        user_id: 1
        })
        
        post3 = Post.create!({
          id: 903,
          body: 'Hope Everyone destroys the day! Send it!',
          user_id: 1
          })
        post5 = Post.create!({
          id: 905,
          body: 'mmmmh, mmmh. Oh ho!',
          user_id: 2
          })
        post4 = Post.create!({
          id: 904,
          body: 'I really love the taste of strawberries glistening in the moonlight. I really cant get enough of your strawberries.',
          user_id: 1
          })


          post1.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/wreckingball.png'), filename: 'wreckingball.png')
          post5.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/Siegmeyer_of_Catarina_HD.webp'), filename: 'Siegmeyer_of_Catarina_HD.webp')

          puts "Posts Created Motha Fucka..." 
          
          puts "Finished like your mom last night..."
  # end