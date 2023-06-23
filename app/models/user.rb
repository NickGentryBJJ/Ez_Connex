# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  first_name      :string           not null
#  last_name       :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  title           :string
#
class User < ApplicationRecord
  has_secure_password
  validates :first_name, :last_name, :password_digest, presence: true
  validates :email, :session_token, uniqueness: true
  validates :email, length: { in: 3..255 }, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 6..255}, allow_nil: true
  before_validation :ensure_session_token

  has_one_attached :photo

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.authenticate(password)
        return user 
    else
        return nil 
    end
  end
  
  
  def reset_session_token!
    self.session_token = generate_unique_session_token
    self.save! 
    self.session_token 
  end
  
  private
  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
  
  def generate_unique_session_token
    while true
      token = SecureRandom::urlsafe_base64(16)
      return token unless User.exists?(session_token: token)
    end
  end
  
end
