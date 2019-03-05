json.user do
  json.set! @user.id do
    json.extract! @user, :id, :name, :email
    json.saved_restaurants @user.saved_restaurants.pluck(:id)
    json.reservations @user.reservations.pluck(:id)
  end
end

json.saved_restaurants do
  @user.saved_restaurants.each do |saved|
    json.set! saved.id do
      json.extract! saved, :id, :restaurant_id, :user_id
    end
  end
end

json.reservations do
  @user.reservations.each do |res|
    json.set! res.id do
      json.extract! res, :id, :reservation, :num_people, :notes, :canceled, :canceled_at, :restaurant_id, :user_id
    end
  end
end
