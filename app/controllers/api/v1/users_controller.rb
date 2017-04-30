module Api
  module V1
    class UsersController < ApplicationController
      before_action :authenticate_user!, only: [:me]
      def me
        render json: current_user
      end
    end
  end
end
