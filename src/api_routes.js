const api_url = process.env.REACT_APP_API_URL || "https://api.octolive.xyz";
export default (() => {
  return {
    sign_in_redirection: api_url + "/users/auth/github/redirect",
    access_token_validation: api_url + "/users/auth/github/callback",
    profile: api_url + "/api/v1/users/me",
    notification: api_url + "/api/v1/notifications",
    feeds: api_url + "/api/v1/feeds",
    repositories: api_url + "/api/v1/repositories",
    read_feed: (id) => { return api_url + "/api/v1/feeds/" + id + "/read"}
  }
})()
