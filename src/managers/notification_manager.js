import ApiRoutes from '../api_routes'

const { NotificationChest, f } = window;

class NotificationManager {
  update = () => {
    f(ApiRoutes.notification)
        .then((content) => {
            NotificationChest.setState({
                notificationsCount: content
            })
        })
  }
}

export default (new NotificationManager());
