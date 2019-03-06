@restaurants.each do |rest|
  json.set! rest.id do
    json.extract! rest, :id, :name, :rating, :cost, :cuisine, :neighborhood, :booked_times_today, :tables_left

    json.profilePhotoURL url_for(rest.profile_photo)
  end
end
