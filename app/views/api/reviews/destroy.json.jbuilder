json.review do
  json.extract! @deleted_review, :id, :restaurant_id
end

json.newRating do
  json.extract! @restaurant, :rating
end
