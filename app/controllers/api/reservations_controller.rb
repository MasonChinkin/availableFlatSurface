class Api::ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(res_params)

    if @reservation.save
      render ["Reservation made!"]
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def res_params
    params.require(:reservation).permit(
      :reservation, :num_people, :restaurant_id, :user_id
    )
  end
end
