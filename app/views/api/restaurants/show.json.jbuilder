json.extract! @restaurant, :id, :name, :description, :cost, :phone, :website, :payment_options, :dress_code, :neighborhood, :cross_street, :parking_details, :user_id, :address, :email, :hours, :cuisine, :rating

json.photoURLs @restaurant.photos.map { |file| url_for(file) }

json.wallpaperURL url_for(@restaurant.wallpaper)
