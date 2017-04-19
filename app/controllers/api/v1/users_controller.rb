class Api::V1::UsersController < ApplicationController
  def show 
    render json: {
      test: true
    }
  end
end
