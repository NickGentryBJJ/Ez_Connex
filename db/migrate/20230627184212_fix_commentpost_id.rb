class FixCommentpostId < ActiveRecord::Migration[7.0]
  def change
    rename_column :comments, :post, :post_id
  end
end
