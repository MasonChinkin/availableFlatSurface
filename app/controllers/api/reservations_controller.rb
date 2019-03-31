class Api::ReservationsController < ApplicationController
  def create
    @reservation = Reservation.new(res_params)

    increment_bookings_today(params[:reservation][:restaurant_id])
    decrement_tables_left(params[:reservation][:restaurant_id])

    if @reservation.save
      render :show # simply return id to front end
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @deleted = Reservation.find(params[:id])

    if @deleted.delete
      render :destroy
    else
      render @deleted.errors.full_messages
    end
  end

  private

  def res_params
    params.require(:reservation).permit(
      :reservation, :num_people, :restaurant_id, :user_id
    )
  end
end
