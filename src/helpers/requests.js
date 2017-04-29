(() => {
  const AuthenticationChest = window.AuthenticationChest;
  const queryParams = (params) => ("?" + Object.keys(params)
          .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
          .join('&'))

  window.f = (url, args = { method: "GET", queryParams: { } }) => {
    const params = {local_token: AuthenticationChest.state.local_token, ...args["queryParams"]}
    return fetch(url + queryParams(params), args).then((e) => e.json())
  }
})()