import ApiRoutes from '../api_routes'

const { FeedChest, f } = window;

class NotificationManager {
  update = () => {
    f(ApiRoutes.feeds)
        .then((content) => {
          FeedChest.setState({
            feeds: content.data.map( (feed) => {
              return {
                bookmarked:feed.bookmarked,
                id:feed.id,
                message:feed.message,
                repo_name:feed.repo_name,
                read: feed.read
              }
            })
          })
        })
  }
}

export default (new NotificationManager());
