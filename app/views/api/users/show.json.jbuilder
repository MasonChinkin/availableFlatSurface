json.user do
  json.set! @user.id do
    json.extract! @user, :id, :name, :email
  end
end

json.saved_restaurants do
  @user.saved_restaurants_data.each do |rest|
    json.set! rest.id do
      json.extract! rest, :id, :name, :cuisine, :neighborhood
      json.profilePhotoURL url_for(rest.profile_photo)
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

json.reserved_restaurants do
  @user.reserved_restaurants_data.each do |rest|
    json.set! rest.id do
      json.extract! rest, :id, :name, :cuisine, :neighborhood
      json.profilePhotoURL url_for(rest.profile_photo)
    end
  end
end
