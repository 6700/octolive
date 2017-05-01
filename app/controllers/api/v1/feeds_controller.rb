class Api::V1::FeedsController < ApplicationController
  def index
    render json: paginated(Event.all)
  end
end
