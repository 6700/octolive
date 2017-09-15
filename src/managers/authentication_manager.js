
import ApiRoutes from '../api_routes'

const { AuthenticationChest, f } = window;

class AuthenticationManager {
  checkLoginStatus = () => {
    if(typeof(AuthenticationChest.state.local_token) === "undefined" || AuthenticationChest.state.local_token === "") {
      this.checkUrl();
    }
    this.getProfileInfo()
  }

  getProfileInfo = (force = false) => {
    if (!force && !AuthenticationChest.state.user){ return; }
    if(typeof(AuthenticationChest.state.local_token) !== "undefined" && AuthenticationChest.state.local_token !== "") {
      f(ApiRoutes.profile)
        .then((content) => {
          AuthenticationChest.setState({
            isLogged: true,
            user: content
          })
        })
        .catch(() => {
          this.logOut();
        })
    }
  }

  logIn = () => {
    fetch(ApiRoutes.sign_in_redirection)
      .then((response) => response.json())
      .then((content) => {
        document.location.href = content.url
      })
  }

  logOut = () => {
    AuthenticationChest.clearPersistedState();
    AuthenticationChest.setState({
      isLogged:false,
      user: { }
    })
    AuthenticationChest.callListeners();
  }

  checkUrl = () => {
    if(!AuthenticationChest.state.isLogged && this.getQueryStringValue('token') !== "") {
      AuthenticationChest.setPersistedState({
        local_token: this.getQueryStringValue('token')
      })
      document.location.href = "/"
    }
  }

  getQueryStringValue (key) {
    return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
  }
}

export default (new AuthenticationManager());
