# == Schema Information
#
# Table name: reservations
#
#  id            :bigint(8)        not null, primary key
#  reservation   :datetime         not null
#  num_people    :integer          not null
#  notes         :text
#  canceled      :boolean
#  canceled_at   :datetime
#  restaurant_id :integer          not null
#  user_id       :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
