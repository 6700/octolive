
import Chest from './chest'

const NotificationChest = new Chest('authentication', {
  isLogged: false,
  user: { }
});

window.NotificationChest = NotificationChest

export default NotificationChest;
