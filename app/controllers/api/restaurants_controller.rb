class Api::RestaurantsController < ApplicationController
  def index
    search = params[:searchTerm][:searchTerm]
    if search.nil?
      @restaurant = Restaurant.with_attached_profile_photo.all
    elsif search.length == 0
      @restaurants = Restaurant.with_attached_profile_photo.all
    else
      @restaurants = Restaurant.with_attached_profile_photo.find_by_name(params[:searchTerm][:searchTerm])
    end

    if @restaurants.length == 0
      render json: "No restaurants found!"
      return
    end

    @restaurants.each { |rest| rest.check_tables_left }

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
