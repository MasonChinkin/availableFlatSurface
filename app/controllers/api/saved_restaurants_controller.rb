class Api::SavedRestaurantsController < ApplicationController
  def create
    @saved_restaurant = SavedRestaurant.new(save_params)

    if @saved_restaurant.save
      render json: ["Restaurant saved!"], status: 200
    else
      render json: @saved_restaurant.errors.full_messages, status: 422
    end
  end

  private

  def save_params
    params.require(:savedRestaurant).permit(:restaurant_id, :user_id)
  end
end
