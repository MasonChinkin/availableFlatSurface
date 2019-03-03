class Api::RestaurantsController < ApplicationController
  def index
    search = params[:searchTerm][:searchTerm]
    if search.length == 0
      @restaurants = Restaurant.all
    else
      @restaurants = Restaurant.find_by_name(params[:searchTerm][:searchTerm])
    end
    render :index
  end

  def show
    @restaurant = Restaurant.find(params[:id])
  end
end
