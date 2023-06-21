# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user       :bigint
#  post       :bigint
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :body, presence: true

    belongs_to :post
    belongs_to :user
end
