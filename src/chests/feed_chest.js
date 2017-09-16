
import Chest from './chest'

const FeedChest = new Chest('feeds', {
  feeds: null,
  section: 'inbox'
});

window.FeedChest = FeedChest

export default FeedChest;
