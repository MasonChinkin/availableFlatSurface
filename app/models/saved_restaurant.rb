# == Schema Information
#
# Table name: saved_restaurants
#
#  id            :bigint(8)        not null, primary key
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#

class SavedRestaurant < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true

  belongs_to :user
  belongs_to :restaurant
end
