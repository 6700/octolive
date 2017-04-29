const api_url = "http://localhost:3000";
export default (() => {
  return {
    sign_in_redirection: api_url + "/users/auth/github/redirect",
    access_token_validation: api_url + "/users/auth/github/callback",
    profile: api_url + "/api/v1/users/me"
  }
})()