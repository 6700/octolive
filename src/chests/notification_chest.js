
import Chest from './chest'

const NotificationChest = new Chest('notifications', {
  notificationsCount: {}
});

window.NotificationChest = NotificationChest

export default NotificationChest;
