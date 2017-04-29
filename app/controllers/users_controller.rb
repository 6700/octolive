class UsersController < ApplicationController
  def redirect
    render json: {
      url: github_auth_url
    } 
  end

  def callback
    user = User.create_from_omniauth(:github, github_info)
    redirect_to "http://localhost:33992/?token=#{user.local_token}"
  end

  private

  def github_info
    data = {
      access_token: GithubService.access_token(params[:code])[:access_token]
    }
    data[:info] = GithubService.new(data[:access_token]).user
    data[:scopes] = GithubService.new(data[:access_token]).scopes
    data
  end
end
