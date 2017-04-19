class GithubService 
  attr_accessor :user, :client, :repositories
  def initialize
    # Get credentials and use it in the instance of the client
  end

  def repositories
    @repositories = client.repositories
  end

  def user
    @user ||= client.user
  end

  private
  def client
    @client ||= Octokit::Client.new(:login => ENV['GITHUB_USER'], :password => ENV['GITHUB_PASSWORD'])
  end
end