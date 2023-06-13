class AddNotNull < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :first_name, false 
    change_column_null :users, :last_name, false 
    change_column_null :users, :email, false   
    change_column_null :posts, :body, false 
  end
end
