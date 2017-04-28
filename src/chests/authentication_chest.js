import Chest from './chest'

var AuthenticationChest = new Chest('authentication', {
  isLogged: true,
  user: { }
});

export default AuthenticationChest;