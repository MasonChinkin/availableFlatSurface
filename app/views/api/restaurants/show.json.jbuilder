json.restaurant do
  json.set! @restaurant.id do
    json.extract! @restaurant, :id, :name, :description, :cost, :phone, :website, :payment_options, :dress_code, :neighborhood, :cross_street, :parking_details, :user_id, :address, :email, :hours, :cuisine, :rating, :booked_times_today
    json.photoURLs @restaurant.photos.map { |file| url_for(file) }
    json.wallpaperURL url_for(@restaurant.wallpaper)
  end
end

json.reviews do
  @restaurant.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :id, :overall_rating, :food_rating, :service_rating, :ambience_rating, :body, :helpful_count, :restaurant_id, :user_id
    end
  end
end

json.reviewers do
  @restaurant.reviewers.each do |reviewer|
    json.set! reviewer.id do
      json.extract! reviewer, :id, :name
    end
  end
end

json.saved_restaurants_join do
  if @save.length > 0
    json.set! @save[0].id do
      json.extract! @save[0], :id, :restaurant_id, :user_id
    end
  end
end
