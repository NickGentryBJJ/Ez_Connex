# == Schema Information
#
# Table name: posts
#
#  id           :integer          not null, primary key
#  body         :string           not null
#  author_id_id :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Post < ApplicationRecord
end
