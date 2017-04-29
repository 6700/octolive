const AuthenticationChest = window.AuthenticationChest
window.f = (url, args = { method: "GET" }) => {
  return fetch(url + "?local_token=" + AuthenticationChest.state.local_token, args).then((e) => e.json())
}