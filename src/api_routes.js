const api_url = process.env.REACT_APP_API_URL || "http://localhost:3000";
window.api_url = api_url;
export default (() => {
  return {
    sign_in_redirection: api_url + "/users/auth/github/redirect",
    access_token_validation: api_url + "/users/auth/github/callback",
    profile: api_url + "/api/v1/users/me"
  }
})()