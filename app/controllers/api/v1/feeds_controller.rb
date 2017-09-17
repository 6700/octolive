class Api::V1::FeedsController < ApplicationController
  AUTHORIZED_TYPES = %i[inbox pull_requests archived issues].freeze
  before_action :authenticate_user!, only: [:index, :read]
  before_action :set_feed, only: [:read, :archive]

  def index
    render json: paginated(feeds)
  end

  def read
    @feed.update_all(read: true)
    render json: @feed
  end

  def archive
    @feed.update_all(archived: true)
    render json: @feed
  end

  private

  def set_feed
    @feed = Event.where(id: params[:feed_id].split(','))
  end

  def feeds
    if AUTHORIZED_TYPES.include?(params[:type].to_sym)
      @feeds ||= current_user.events.send(params[:type].to_sym).order(id: :desc)
    else
      @feeds ||= current_user.events.order(id: :desc)
    end
  end
end
