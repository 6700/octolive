class Api::V1::UsersController < ApplicationController
  def me
    user =  User.find_by(access_token: params[:local_token])
    if user.nil?
      head :bad_request
    else
      render json: user
    end
  end
  
  def show 
    render json: User.find(params[:id])
  end
end
