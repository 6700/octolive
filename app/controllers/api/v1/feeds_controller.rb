class Api::V1::FeedsController < ApplicationController
  AUTHORIZED_TYPES = [:inbox]
  before_action :authenticate_user!, only: [:index, :read]
  before_action :set_feed, only: [:read]

  def index
    render json: paginated(feeds)
  end

  def read
    @feed.update(read: true)
    render json: @feed
  end

  def archive
    @feed.update(archived: true)
    render json: @feed
  end

  private
  def set_feed
    @feed = Event.find(params[:feed_id])
  end

  def feeds
    if AUTHORIZED_TYPES.include?(params[:type].to_sym)
      @feeds ||= current_user.events.send(params[:type].to_sym).order(id: :desc)
    else
      @feeds ||= current_user.events.order(id: :desc)
    end
  end
end
