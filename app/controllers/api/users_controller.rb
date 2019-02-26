class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      sign_in(user)
      render json: "api/users/show"
    else
      render json :@user.full_messages, status: 422
    end
  end

  # bonus feature: edit user account
  # def edit
  # end

  # bonus feature: delete user account
  # def destroy
  # end

  private

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
