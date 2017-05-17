class GithubClient
  include HTTParty
  attr_accessor :access_token, :last_response

  base_uri 'https://api.github.com'

  def initialize(access_token)
    @access_token = access_token
  end

  def repositories(last_etag=nil)
    get("/user/repos", last_etag: last_etag)
  end

  def pull_requests(repository_name, last_etag=nil)
    get("/repos/#{repository_name}/pulls", last_etag: last_etag)
  end

  def issues(repository_name, last_etag=nil)
    get("/repos/#{repository_name}/issues", {
      state: :all
    }, last_etag: last_etag)
  end


  def get(url, params = {}, last_etag: nil)
    last_etag ||= ""
    @last_response = self.class.get(url, {
      query: params.merge({
        access_token: access_token,
        per_page: 100
      }),
      headers: {
        "User-Agent" => "Really-Working-Kit",
        "If-None-Match" => last_etag
      }
    })
  end
end
