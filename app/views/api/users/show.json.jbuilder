json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :title, :created_at, :updated_at
    json.photo @user.photo.attached? ? @user.photo.url : nil
end