class Api::V1::NotificationsController < ApplicationController
  before_action :authenticate_user!, only: [:index]

  def index
    render json: notifications_counts
  end

  private

  def notifications_fields
    [:inbox, :archived, :pending, :important, :releases, :pull_requests, :mentions, :issues]
  end

  def notifications_counts
    notifications_fields.inject({}) do |list, scope|
      list["#{scope}_count"] = current_user.events.send(scope).unread.count
      list
    end
  end
end
