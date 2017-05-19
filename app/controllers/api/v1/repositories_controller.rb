class Api::V1::RepositoriesController < ApplicationController
  def index
    render json: current_user.repositories.includes(:owner)
  end
end
