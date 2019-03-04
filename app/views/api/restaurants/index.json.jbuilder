@restaurants.each do |rest|
  json.set! rest.id do
    json.extract! rest, :id, :name, :rating, :cost, :cuisine, :neighborhood
  end
end
