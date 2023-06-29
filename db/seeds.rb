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
    ApplicationRecord.connection.reset_pk_sequence!('comments')
    
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    gwyn = User.create!(
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

    artorias = User.create!(
      first_name: 'Artorias',
      last_name: 'Of the Abyss',
      title: 'Abyss Walker',
      email: 'arty@catarina.com',
      password: 'password'
    )
    solair = User.create!(
      first_name: 'Solair',
      last_name: 'Of Astora',
      title: 'Sun Bro',
      email: 'sunbro@catarina.com',
      password: 'password'
    )
    gwyndolin = User.create!(
      first_name: 'Gwyndolin',
      last_name: 'Dark Sun',
      title: 'Blade of the Darkmoon',
      email: 'snakesinmyskirt@catarina.com',
      password: 'password'
    )
    sif = User.create!(
      first_name: 'Sif',
      last_name: 'The Great Grey Wolf',
      title: 'Good Boi',
      email: 'SwordInMyMouth@catarina.com',
      password: 'password'
    )
    patches = User.create!(
      first_name: 'Patches',
      last_name: 'The Hyena',
      title: 'Humble Merchant',
      email: 'lootGod@catarina.com',
      password: 'password'
    )
    quelaag = User.create!(
      first_name: 'Quelaag',
      last_name: 'Chaos Witch',
      title: 'Daughter of Chaos',
      email: 'spiderMami@catarina.com',
      password: 'password'
    )

    
    puts "Users created... Slut..."
    puts "Attaching photos fucker"

    # 1
    gwyn.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/real_gwyn_pic.png'), filename: 'real_gwyn_pic.png')
    # 2
    siegmeyer.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/siegmeyer.jpg'), filename: 'siegmeyer.jpg')
    # 3
    artorias.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/ARTORIAS+2.jpg'), filename: 'ARTORIAS+2.jpg')
    # 4
    solair.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/solair.png'), filename: 'solair.png')
    # 5
    gwyndolin.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/gwyndolin.png'), filename: 'gwyndolin.png')
    # 6
    sif.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/sif.jpg'), filename: 'sif.jpg')
    # 7
    patches.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/patches.png'), filename: 'patches.png')
    # 8
    quelaag.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/quelaag.png'), filename: 'quelaag.png')


    puts "Photos attached lil whore..."
    puts "Creating Posts Bitch..."

    post1 = Post.create!({
      body: 'Felt cute... Might delete later 😜',
      user_id: 1
      })
      
      post2 = Post.create!({
        body: 'Praise the Sun!',
        user_id: 4
        })
        
        post3 = Post.create!({
          body: 'mmmmh, mmmh.... Oh ho! Forgive me, I was absorbed in thought.  I am in quite a pickle... Quite a pickle indeed..',
          user_id: 2 
          })
          post4 = Post.create!({
            body: 'Shout out to my homie Sif. Been there since day 1.',
            user_id: 3 
            })
          post5 = Post.create!({
            body: 'Wake up and feel the wrath of my DarkmoonBlade!',
            user_id: 5
            })
          post6 = Post.create!({
            body: 'I am done with all the looting.. Im a humble merchant now. Trusty Patches. kehehehe',
            user_id: 7
            })
          post7 = Post.create!({
            body: 'Sometimes being a spider is not easy. But i do like spitting lava at people. :)',
            user_id: 8
            })
        

          post1.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/real_gwyn_pic.png'), filename: 'real_gwyn_pic.png')
          post3.photo.attach(io: URI.open('https://ezconnex-dev.s3.us-west-1.amazonaws.com/Siegmeyer_of_Catarina_HD.webp'), filename: 'Siegmeyer_of_Catarina_HD.webp')

          puts "Posts Created Motha Fucka..." 


          puts "Creating Comments..."

          comment1 = Comment.create!({
            user_id: 2,
            post_id: 1,
            body: "Lookin hot Gwyn..."
          })
          comment2 = Comment.create!({
            user_id: 2,
            post_id: 2,
            body: "Hmmmmm... You warriors of sunlight do have a fascinating way of life..."
          })
          comment3 = Comment.create!({
            user_id: 1,
            post_id: 3,
            body: "Smh... Always getting stuck somewhere."
          })
          comment4 = Comment.create!({
            user_id: 6,
            post_id: 4,
            body: "Till the bitter end my dear friend. I mean woof."
          })
          comment5 = Comment.create!({
            user_id: 2,
            post_id: 6,
            body: "Congrates Patches!! Happy for you buddy."
          })
          
          puts "Finished like your mom last night..."
          # puts "done"
  # end