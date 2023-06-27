# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :bigint
#  post_id    :bigint
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :post
    belongs_to :user

    def get_name 
        user = self.user
        return user.first_name + " " + user.last_name
    end
end
