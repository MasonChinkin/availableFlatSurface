class Api::RestaurantsController < ApplicationController
  def index
    search = params[:searchTerm][:searchTerm]
    if search.length == 0
      @restaurants = Restaurant.with_attached_profile_photo.all
    else
      @restaurants = Restaurant.with_attached_profile_photo.find_by_name(params[:searchTerm][:searchTerm])
    end
    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.with_attached_wallpaper.with_attached_profile_photo.find(params[:id])
    render :show
  end
end
