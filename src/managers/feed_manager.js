import ApiRoutes from '../api_routes'
import assign from 'lodash/assign'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import map from 'lodash/map'
import mapKeys from 'lodash/mapKeys'

const { FeedChest, f, NotificationManager } = window;

class FeedManager {
  update = () => {
    f(ApiRoutes.feeds, { queryParams: { type: "inbox" }})
      .then((content) => {
        FeedChest.setState({
          feeds: map(assign(
            mapKeys(FeedChest.state.feeds, k => k.id),
            mapKeys(content.data, k => k.id)
          ))
        })
      })
  }

  toggleAll = () => {
    FeedChest.setState({
      feeds: FeedChest.state.feeds.map((item) => merge(clone(item), { checked: !item.checked }))
    })
  }

  markAllAs = (checked = false) => {
    FeedChest.setState({
      feeds: FeedChest.state.feeds.map((item) => merge(clone(item), { checked: checked }))
    })
  }

  markAsRead = (ids = null) => {
    if(ids === null) return;
    f(ApiRoutes.read_feed(ids.join(','))).then(() => { this.update(); NotificationManager.update() })
  }

  archive = (ids = null) => {
    if(ids === null) return;
    f(ApiRoutes.archive_feed(ids.join(','))).then(() => { this.update(); NotificationManager.update() })
  }
}

export default (new FeedManager());
