class Api::V1::FeedsController < ApplicationController
  before_action :authenticate_user!, only: [:index, :read]
  before_action :set_feed, only: [:read]

  def index
    render json: paginated(current_user.events.order(id: :desc))
  end

  def read
    @feed.update(read: true)
    render json: @feed
  end

  private
  def set_feed
    @feed = Event.find(params[:feed_id])
  end
end
