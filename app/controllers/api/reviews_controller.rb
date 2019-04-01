class Api::ReviewsController < ApplicationController
  def create
    @review = Review.new(review_params)

    if @review.save
      render :create
    else
      render @review.errors.full_messages
    end
  end

  def destroy
    @deleted_review = Review.find(params[:id])

    if @deleted_review.delete
      render :destroy
    else
      render @deleted_review.errors.full_messages
    end
  end

  def update
    @updated_review = Review.find(params[:id])
    if @updated_review
      @updated_review.update(review_params)
      render :update
    else
      render @updated_review.errors.full_messages
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :overall_rating, :food_rating, :service_rating, :ambience_rating, :body, :restaurant_id, :user_id
    )
  end
end
