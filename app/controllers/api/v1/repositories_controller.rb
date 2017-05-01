class Api::V1::RepositoriesController < ApplicationController
  def index
    render json: paginated(current_user.repositories.includes(:owner))
  end
end
