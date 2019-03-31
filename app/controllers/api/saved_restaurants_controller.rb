class Api::SavedRestaurantsController < ApplicationController
  def create
    @save = SavedRestaurant.new(save_params)

    if @save.save
      render :create
    else
      render json: @save.errors.full_messages, status: 422
    end
  end

  def destroy
    @save = SavedRestaurant.find(params[:id])

    if @save.delete
      render json: ["Saved restaurant deleted"]
    else
      render json: @save.errors.full_messages, status: 404
    end
  end

  private

  def save_params
    params.require(:savedRestaurant).permit(:restaurant_id, :user_id)
  end
end
