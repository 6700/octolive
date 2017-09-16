import ApiRoutes from '../api_routes'
import assign from 'lodash/assign'
import merge from 'lodash/merge'
import clone from 'lodash/clone'
import map from 'lodash/map'
import mapKeys from 'lodash/mapKeys'
import reject from 'lodash/reject'
import includes from 'lodash/includes'
import NotificationManager from './notification_manager';

const { FeedChest, f } = window;

class FeedManager {
  update = () => {
    this.fetchPage(1)
  }

  fetchPage = (page = 1) => {
    return f(ApiRoutes.feeds, { queryParams: { type: FeedChest.state.section, page: page }})
      .then((content) => {
        FeedChest.setState({
          lastPage: Math.max(FeedChest.state.lastPage, page),
          feeds: map(assign(
            mapKeys(FeedChest.state.feeds, k => k.id),
            mapKeys(map(content.data, (i) => merge(clone(i), { checked: false })), k => k.id)
          )),
          maxPage: content.metadata.total_pages
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
      FeedChest.setState({
        feeds: reject(FeedChest.state.feeds, (feed) => includes(ids, feed.id))
      })
      this.update();
      NotificationManager.update()
    })
  }

  changeSection = (section) => {
    FeedChest.setState({ section: section, feeds: null })
    this.update();
  }

  fetchNextPage = () => {
    return this.fetchPage(FeedChest.state.lastPage + 1)
  }
}

export default (new FeedManager());
