import React, { Component } from 'react';
import './FeedList.css';
import FeedManager from '../../managers/feed_manager';
import NotificationManager from '../../managers/notification_manager';
import Feed from '../Feed';
import Paginator from '../Paginator'
import EmptyAlert from '../EmptyAlert'
import map from 'lodash/map'
import every from 'lodash/every'
import sortBy from 'lodash/sortBy'
import reverse from 'lodash/reverse'
import filter from 'lodash/filter'
const { FeedChest } = window;

class FeedList extends Component {
  MASSIVE_ACTIONS = {
    placeholder: {
      text: 'Acción',
      action: () => {}
    },
    read: {
      text: 'Marcar como leido',
      action: (feeds) => FeedManager.markAsRead(feeds)
    },
    archive: {
      text: 'Archivar',
      action: (feeds) => FeedManager.archive(feeds)
    }
  }

  compoenntWillUnmount () {
    FeedChest.unregister(this);
  }

  componentDidMount() {
    FeedChest.register(this);
    FeedManager.update();
    setInterval(() => { FeedManager.update(); NotificationManager.update() }, 15000);
  }

  handleChange = (e) => {
    this.MASSIVE_ACTIONS[e.target.value].action(map(filter(FeedChest.state.feeds, { checked: true }), 'id'));
    FeedManager.markAllAs(false);
    e.target.value = Object.keys(this.MASSIVE_ACTIONS)[0]
  }

  handleCheckAll = (e) => {
    e.stopPropagation()
    FeedManager.toggleAll()
  }

  renderMassiveActions = () => {
    return (
      <select className="selector-feed" name="select" onChange={this.handleChange}>
        {map(this.MASSIVE_ACTIONS, (opt, key) => {
          return <option value={key}
                         key={key}>
                    {opt.text}
                 </option>
        })}
      </select>
    )
  }

  render () {
    return (
    <div className="col-xs-12 box">
      <div className="feed">
        <div className="col-xs-4">
          <div className="side-inputs col-xs-12">
            <input type="checkbox" onChange={this.handleCheckAll} checked={every(FeedChest.state.feeds, { checked: true })}/>
            {this.renderMassiveActions()}
          </div>
        </div>
        <div className="refresh-bar ">
          <div className="col-xs-2 col-sm-1 col-lg-1 col-xs-offset-5 col-sm-offset-7 col-lg-offset-77">
            <button onClick={()=>{ FeedManager.update() ; NotificationManager.update()}} className="refresh-button"> <i className="fa fa-refresh" aria-hidden="true"></i></button>
          </div>
        </div>
        <Paginator className="notifications col-xs-12"
                   onNextPage={FeedManager.fetchNextPage}
                   items={reverse(sortBy(FeedChest.state.feeds, 'id'))}
                   itemComponent={Feed}
                   maxPage={FeedChest.state.maxPage}
                   emptyComponent={EmptyAlert}
                   loadingComponent={EmptyAlert}
                   />
      </div>
    </div>
    )
  }
}

export default FeedList;
