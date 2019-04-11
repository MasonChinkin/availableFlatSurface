class Api::RecommendedRestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.find_recommendations
    render :index
  end
end
