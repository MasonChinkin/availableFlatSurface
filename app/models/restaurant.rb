# == Schema Information
#
# Table name: restaurants
#
#  id              :bigint(8)        not null, primary key
#  name            :string           not null
#  description     :text             not null
#  cost            :integer
#  street_address  :string           not null
#  city            :string           not null
#  state           :string
#  country         :string           not null
#  email           :string           not null
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
#

class Restaurant < ApplicationRecord
  validates :name, :description, :street_address, :city, :country, :email, :user_id, presence: true

  has_many_attached :photos

  belongs_to :user
end
