@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :user_id, :post_id, :body
        json.name comment.get_name
        json.set! 'user' do 
            json.extract! comment.user, :first_name, :last_name, :title, :photo
            json.photo comment.user.photo.attached? ? comment.user.photo.url : nil
        end
    end
end