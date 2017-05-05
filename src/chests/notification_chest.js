
import Chest from './chest'

const NotificationChest = new Chest('notification', {
  isLogged: false,
  user: { }
});

window.NotificationChest = NotificationChest

export default NotificationChest;
