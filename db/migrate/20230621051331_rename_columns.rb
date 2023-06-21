class RenameColumns < ActiveRecord::Migration[7.0]
  def change
    rename_column :posts, :author, :author_id
  end
end
