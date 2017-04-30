module ApplicationHelper
  GITHUB_SCOPES = [
    'user',
    'notifications',
    'read:org',
    'repo',
    'repo_deployment',
    'repo:status'

  ].freeze

  def github_redirect_url_raw
    "http://#{request.host}:#{request.port}/users/auth/github/callback?origin=#{origin}"
  end

  def redirect_url
    URI.encode(github_redirect_url_raw)
  end

  def github_auth_url
    "#{github_auth_path}?scope=#{scopes}&client_id=#{client_id}&redirect_uri=#{redirect_url}"
  end

  def github_auth_path
    'https://github.com/login/oauth/authorize'
  end

  def scopes
    GITHUB_SCOPES.join(',')
  end

  def client_id
    Rails.application.secrets.github_client_id
  end
end
