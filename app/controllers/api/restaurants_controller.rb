class Api::RestaurantsController < ApplicationController
  def index
    # fetch from splash for recs
    if params[:searchTerm].nil?
      @restaurants = Restaurant.all
      render :index
      return
    end

    search = params[:searchTerm][:searchTerm]
    if search.nil?
      @restaurant = Restaurant.all
    elsif search.length == 0
      @restaurants = Restaurant.with_attached_profile_photo.all
    else
      @restaurants = Restaurant.with_attached_profile_photo.find_by_name(params[:searchTerm][:searchTerm])
    end
    render :index
  end

  def show
    @restaurant = Restaurant.with_attached_photos.with_attached_wallpaper.with_attached_profile_photo
      .find(params[:payload][:restaurant_id])

    @save = SavedRestaurant.where(
      restaurant_id: params[:payload][:restaurant_id],
      user_id: params[:payload][:user_id],
    )

    render :show
  end
end
