json.saved_restaurants_join do
  json.set! @save.id do
    json.extract! @save, :id, :restaurant_id, :user_id
  end
end
