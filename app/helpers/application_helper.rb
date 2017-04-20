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
    "https://github.com/login/oauth/authorize?scope=#{github_scopes}&client_id=#{Rails.application.secrets.github_client_id}"
  end

  def github_scopes
    GITHUB_SCOPES.join(",")
  end
end
