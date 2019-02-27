# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  vip             :boolean          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :name, :email, :password_digest, :session_token, presence: true
  validates :vip, inclusion: {in: [true, false]}
  validates :password, length: {minimum: 6, allow_nil: true}

  before_validation :ensure_session_token
  before_validation :ensure_vip

  attr_reader :password

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user if user && user.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  # Temporary. Create user form will have option.
  def ensure_vip
    self.vip = "false"
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
end
