class GithubClient
  include HTTParty
  attr_accessor :access_token, :last_response

  base_uri 'https://api.github.com'

  def initialize(access_token)
    @access_token = access_token
  end

  def repositories(since=nil)
    get("/user/repos", since: since)
  end

  def get(url, since: nil)
    since ||= Time.zone.now
    @last_response = self.class.get(url, {
      query: {
        access_token: access_token
      },
      headers: {
        "User-Agent": "Really-Working-Kit",
        "If-Modified-Since": since.httpdate
      }
    })
  end
end
