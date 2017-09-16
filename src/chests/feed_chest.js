
import Chest from './chest'

const FeedChest = new Chest('feeds', {
  feeds: null,
  lastPage: 0,
  maxPage: 1,
  section: 'inbox'
});

window.FeedChest = FeedChest

export default FeedChest;
