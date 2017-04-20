class GithubService 
  attr_accessor :user, :client, :repositories, :access_token
  def initialize access_token
    @access_token = access_token
  end

  def repositories
    @repositories = client.repositories
  end

  def user
    @user ||= client.user
  end

  def self.access_token code
    oauth_client = Octokit::Client.new({api_endpoint: 'https://github.com'})
    oauth_client.post('/login/oauth/access_token', {
      client_id: Rails.application.secrets.github_client_id,
      client_secret: Rails.application.secrets.github_secret_key,
      redirect_uri: "http://localhost:3000/users/auth/github/callback",
      code: code,
      accept: 'application/json'
    })
  end

  def scopes
    client.scopes
  end

  def client
    @client ||= Octokit::Client.new(access_token: access_token)
  end
end