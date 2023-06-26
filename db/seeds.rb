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
      first_name: 'Gwyn',
      last_name: 'Lord of Cinder', 
      title: 'Lord of Cinder',
      email: 'gwyn@email.com', 
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
    demo_user.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/gwyn_prof_pic.png'), filename: 'gwyn_prof_pic.png')

    
    puts "Creating Posts Bitch..."

    post1 = Post.create!({
      id: 900,
      body: 'Felt cute... Might delete later 😜',
      user_id: 1
      })
      
      post2 = Post.create!({
        id: 901,
        body: 'Linking the fire took a lot out of me, if anyone knows a good physical therapist let me know in the comments.',
        user_id: 1
        })
        
        post5 = Post.create!({
          id: 805,
          body: 'mmmmh, mmmh.... Oh ho! Forgive me, I was absorbed in thought.  I am in quite a pickle... Quite a pickle indeed..',
          user_id: 2 
          })
        

          post1.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/gwyn_prof_pic.png'), filename: 'gwyn_prof_pic.png')
          post5.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/Siegmeyer_of_Catarina_HD.webp'), filename: 'Siegmeyer_of_Catarina_HD.webp')

          puts "Posts Created Motha Fucka..." 
          
          puts "Finished like your mom last night..."
  # end