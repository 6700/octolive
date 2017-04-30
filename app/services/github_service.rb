class GithubService
  attr_accessor :user, :client, :repositories, :access_token
  def initialize(access_token)
    @access_token = access_token
  end

  def repositories
    @repositories = client.repositories
  end

  def user
    @user ||= client.user
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

  def client
    @client ||= Octokit::Client.new(access_token: access_token)
  end
end
