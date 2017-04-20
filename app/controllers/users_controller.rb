class UsersController < ApplicationController
  def redirect
    if params[:provider] == "github"
      redirect_to github_auth_url
    end
  end

  def callback
    # if params[:provider] == "github"
    User.create_from_omniauth(:github, github_info)
    redirect_to "/"
    # end
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
