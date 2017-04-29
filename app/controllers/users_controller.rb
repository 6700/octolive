class UsersController < ApplicationController
  include UsersHelper
  before_action :check_origin, only: [:redirect, :callback]
  def redirect
    render json: {
      url: github_auth_url
    } 
  end

  def callback
    user = User.create_from_omniauth(:github, github_info)
    redirect_to "#{params[:origin]}/?token=#{user.local_token}"
  end

  private

  def github_info
    data = { access_token: GithubService.access_token(params[:code])[:access_token] }
    data[:info] = GithubService.new(data[:access_token]).user
    data[:scopes] = GithubService.new(data[:access_token]).scopes
    data
  end

  def origin
    params[:origin] || request.origin
  end

  def check_origin
    render json: {message: "invalid origin"}, status: :forbidden unless is_an_valid_origin? origin
  end
end
