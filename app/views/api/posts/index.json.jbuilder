@posts.each do |post|
    json.set! post.id do 
        json.extract! post, :id, :body, :user_id, :comments, :created_at, :updated_at
        json.photo post.photo.attached? ? post.photo.url : nil
        json.set! 'user' do 
            json.extract! post.user, :first_name, :title
            json.photo post.user.photo.attached? ? post.user.photo.url : nil
        end
    
    end
end