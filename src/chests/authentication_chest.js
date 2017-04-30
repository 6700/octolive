import Chest from './chest'

var AuthenticationChest = new Chest('authentication', {
  isLogged: false,
  user: { }
});

export default AuthenticationChest;