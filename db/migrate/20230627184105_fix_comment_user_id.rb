class FixCommentUserId < ActiveRecord::Migration[7.0]
  def change
    rename_column :comments, :user, :user_id
  end
end
