json.review do
  json.extract! @updated_review, :id, :overall_rating, :food_rating, :service_rating, :ambience_rating, :body, :helpful_count, :restaurant_id, :user_id
end

json.new_rating do
  json.extract! @restaurant, :rating
end
