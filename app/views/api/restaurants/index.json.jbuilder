json.restaurants do
  @restaurants.each do
    json.partial! "api/restaurants/restaurant", restaurant: @restaurant
  end
end
