import ApiRoutes from '../api_routes'
import assign from 'lodash/assign'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import map from 'lodash/map'
import mapKeys from 'lodash/mapKeys'
import NotificationManager from './notification_manager';

const { FeedChest, f } = window;

class FeedManager {
  update = () => {
    f(ApiRoutes.feeds, { queryParams: { type: FeedChest.state.section }})
      .then((content) => {
        FeedChest.setState({
          feeds: map(assign(
            mapKeys(FeedChest.state.feeds, k => k.id),
            mapKeys(content.data.length > 0 ? merge(content.data, { checked: false }) : undefined, k => k.id)
          ))
        })
      })
  }

  toggleAll = () => {
    FeedChest.setState({
      feeds: FeedChest.state.feeds.map((item) => merge(clone(item), { checked: !item.checked }))
    })
  }

  toggle = (id = null) => {
    if(id === null) return;
    FeedChest.setState({
      feeds: FeedChest.state.feeds.map((feed) => feed.id === id ? merge(clone(feed), { checked: !feed.checked }) : feed)
    })
  }

  markAllAs = (checked = false) => {
    FeedChest.setState({
      feeds: FeedChest.state.feeds.map((item) => merge(clone(item), { checked: checked }))
    })
  }

  markAsRead = (ids = null) => {
    if(ids === null) return;
    f(ApiRoutes.read_feed(ids.join(','))).then(() => {
      this.update();
      NotificationManager.update()
    })
  }

  archive = (ids = null) => {
    if(ids === null) return;
    f(ApiRoutes.archive_feed(ids.join(','))).then(() => {
      this.update();
      NotificationManager.update()
    })
  }

  changeSection = (section) => {
    FeedChest.setState({ section: section, feeds: null })
    this.update();
  }
}

export default (new FeedManager());
