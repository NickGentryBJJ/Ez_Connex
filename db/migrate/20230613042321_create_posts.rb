class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.string :body
      t.references :author_id, foreign_key: {to_table: :users}
      t.timestamps
    end
  end
end
