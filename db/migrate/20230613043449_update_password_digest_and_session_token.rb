class UpdatePasswordDigestAndSessionToken < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :password_digest, false 
    change_column_null :users, :session_token, false 

  end
end
