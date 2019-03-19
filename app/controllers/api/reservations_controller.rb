class Api::ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(res_params)

    debugger
    increment_bookings_today(params[:reservation][:restaurant_id])
    debugger

    if @reservation.save
      render :show # simply return id to front end
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
