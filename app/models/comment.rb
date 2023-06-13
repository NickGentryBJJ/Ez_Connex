# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id_id :integer
#  post_id_id :integer
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
end
