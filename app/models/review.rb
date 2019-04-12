# == Schema Information
#
# Table name: reviews
#
#  id              :bigint(8)        not null, primary key
#  overall_rating  :integer          not null
#  food_rating     :integer          not null
#  service_rating  :integer          not null
#  ambience_rating :integer          not null
#  body            :text             not null
#  helpful_count   :integer          not null
#  restaurant_id   :integer          not null
#  user_id         :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Review < ApplicationRecord
  validates :overall_rating, :food_rating, :service_rating, :ambience_rating, :body, :helpful_count, :restaurant_id, :user_id, presence: true
  validates :overall_rating, :food_rating, :service_rating, :ambience_rating, inclusion: {in: [1, 2, 3, 4, 5]}

  before_validation :ensure_helpful_count_zero
  after_save :adjust_restaurant_rating

  belongs_to :user
  belongs_to :restaurant

  def ensure_helpful_count_zero
    self.helpful_count = 0
  end

  def adjust_restaurant_rating
    restaurant = Restaurant.find(self.restaurant_id)
    restaurant.set_rating
  end
end
