# == Schema Information
#
# Table name: restaurants
#
#  id              :bigint(8)        not null, primary key
#  name            :string           not null
#  description     :text             not null
#  cost            :integer
#  phone           :string
#  website         :string
#  payment_options :string
#  dress_code      :string
#  neighborhood    :string
#  cross_street    :string
#  parking_details :string
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  address         :string           not null
#  email           :string           not null
#  cuisine         :string
#

class Restaurant < ApplicationRecord
  validates :name, :description, :address, :email, :user_id, presence: true

  has_many_attached :photos
  has_one_attached :profile_photo

  belongs_to :user
end
