class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      @restaurant = Restaurant.find(@review.restaurant_id)
      render :create
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @deleted_review = Review.find(params[:id])

    if @deleted_review.delete
      @restaurant = Restaurant.find(@deleted_review.restaurant_id)
      @restaurant.set_rating
      render :destroy
    else
      render json: @deleted_review.errors.full_messages, status: 422
    end
  end

  def update
    @updated_review = Review.find(params[:id])
    if @updated_review && @updated_review.update(review_params)
      @restaurant = Restaurant.find(@updated_review.restaurant_id)
      render :update
    else
      render json: @updated_review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :overall_rating, :food_rating, :service_rating, :ambience_rating, :body, :restaurant_id, :user_id
    )
  end
end
