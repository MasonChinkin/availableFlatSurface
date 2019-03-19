class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :require_sign_in

  def sign_in(user)
    @current_user = user
    session[:session_token] = user.reset_session_token
  end

  def sign_out
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def signed_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  # add one to bookings today number when reservation made
  def increment_bookings_today(restaurant_id)
    rest = Restaurant.find(restaurant_id)
    rest.booked_times_today += 1
    rest.save
  end

  # return status 403 Forbidden if user is unauthorized
  def require_sign_in
    render status: 403
  end
end
