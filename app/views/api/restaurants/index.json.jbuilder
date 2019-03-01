json.restaurants do
  @restaurants.each do |rest|
    json.set! rest.id do
      json.extract! rest, :id, :name, :description, :cost, :phone, :website, :payment_options, :dress_code, :neighborhood, :cross_street, :parking_details, :user_id, :address, :email
    end
  end
end
