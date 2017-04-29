module ApplicationHelper
  GITHUB_SCOPES = [
    "user",
    "notifications",
    "read:org",
    "repo", 
    "repo_deployment",
    "repo:status",

  ].freeze

  def github_auth_url
    redirect_uri = URI.encode("http://#{request.host}:#{request.port}/users/auth/github/callback?origin=#{origin}")
    "https://github.com/login/oauth/authorize?scope=#{github_scopes}&client_id=#{Rails.application.secrets.github_client_id}&redirect_uri=#{redirect_uri}"
  end

  def github_scopes
    GITHUB_SCOPES.join(",")
  end
end
