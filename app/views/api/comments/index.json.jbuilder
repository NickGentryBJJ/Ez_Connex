@comments.each do |comment|
    json.set! comment.id do 
        json.extract! comment, :id, :user_id, :post_id, :body
        json.name comment.get_name
        json.set! 'user' do 
            json.extract! comment.user, :first_name, :last_name, :title
        end
    end
end