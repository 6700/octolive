module Api
  module V1
    class UsersController < ApplicationController
      def me
        user = User.find_by(access_token: params[:local_token])
        if user.nil?
          head :bad_request
        else
          render json: user
        end
      end
    end
  end
end
