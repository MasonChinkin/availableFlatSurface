class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.find_by_name(params[:searchTerm][:searchTerm])
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
