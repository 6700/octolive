class GithubService
  attr_accessor :user, :client, :repositories, :access_token


  def initialize(access_token)
    @access_token = access_token
  end

  def repositories(since)
    @repositories = new_client.repositories(since)
  end

  def user
    @user ||= client.user
  end

  def pull_requests repository_full_name, since
    new_client.pull_requests(repository_full_name, since)
  end

  def issues(repository_full_name, since)
    new_client.issues(repository_full_name, since)
  end

  def notifications
    @notifications ||= client.notifications
  end

  def self.access_token(code, redirect_uri)
    oauth_client = Octokit::Client.new(api_endpoint: 'https://github.com')
    oauth_client.post('/login/oauth/access_token',
                      client_id: Rails.application.secrets.github_client_id,
                      client_secret: Rails.application.secrets.github_secret_key,
                      redirect_uri: redirect_uri,
                      code: code,
                      accept: 'application/json')
  end

  delegate :scopes, to: :client
  delegate :last_response, to: :new_client

  def client
    Octokit.auto_paginate = true unless Octokit.auto_paginate
    @client ||= Octokit::Client.new(access_token: access_token)
  end

  def new_client
    @new_client ||= GithubClient.new(access_token)
  end
end
