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

require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
