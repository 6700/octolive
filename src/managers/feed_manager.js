import ApiRoutes from '../api_routes'
import assign from 'lodash/assign'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import map from 'lodash/map'
import mapKeys from 'lodash/mapKeys'

const { FeedChest, f } = window;

class NotificationManager {
  update = () => {
    f(ApiRoutes.feeds, { queryParams: { type: "inbox" }})
      .then((content) => {
        FeedChest.setState({
          feeds: map(assign(
            mapKeys(content.data, k => k.id),
            mapKeys(FeedChest.state.feeds, k => k.id)
          ))
        })
      })
  }

  checkAll = () => {
    FeedChest.setState({
      feeds: FeedChest.state.feeds.map((item) => merge(clone(item), { checked: !item.checked }))
    })
  }
}

export default (new NotificationManager());
