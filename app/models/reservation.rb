# == Schema Information
#
# Table name: reservations
#
#  id            :bigint(8)        not null, primary key
#  num_people    :integer          not null
#  notes         :text
#  canceled      :boolean
#  canceled_at   :datetime
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  reservation   :float            not null
#

class Reservation < ApplicationRecord
  validates :reservation, :num_people, :restaurant_id, :user_id, presence: true
  validates :canceled, inclusion: {in: [true, false]}

  before_validation :ensure_canceled_false

  belongs_to :user
  belongs_to :restaurant

  def ensure_canceled_false
    self.canceled = "false"
  end
end
