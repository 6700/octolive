class Api::V1::RepositoriesController < ApplicationController
  def index
    render json: current_user.repositories
  end
end
