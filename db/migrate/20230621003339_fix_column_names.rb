class FixColumnNames < ActiveRecord::Migration[7.0]
  def change
    rename_column :comments, :user_id, :user
    rename_column :comments, :post_id, :post
    rename_column :posts, :author_id_id, :author
  end
end
