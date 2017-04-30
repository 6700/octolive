
import Chest from './chest'

const AuthenticationChest = new Chest('authentication', {
  isLogged: false,
  user: { }
});

window.AuthenticationChest = AuthenticationChest

export default AuthenticationChest;