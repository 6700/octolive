import React, { Component } from 'react';
import './feed.css';
import FeedManager from '../managers/feed_manager';
import FeedNotification from './feednotification.js';
import NotificationManager from '../managers/notification_manager';
import _ from 'lodash';
const { FeedChest } = window;

class FeedList extends Component {
  MASSIVE_ACTIONS = {
    placeholder: {
      text: 'Acción',
      action: () => {}
    },
    read: {
      text: 'Marcar como leido',
      action: () => {}
    }
  }

  constructor (props) {
    super(props)
    this.state = { feeds: null }
  }

  compoenntWillUnmount () {
    FeedChest.unregister(this);
  }

  componentDidMount() {
    FeedChest.register(this);
    FeedManager.update();
    setInterval(() => { FeedManager.update(); NotificationManager.update() }, 15000);
  }

  handleChange (e) {
    this.MASSIVE_ACTIONS[e.targe.value].action();
  }

  handleCheckAll = () => {
    // TBI
  }

  renderMassiveActions = () => {
    return (
      <select className="selector-feed" name="select" onChange={this.handleChange}>
        {_.map(this.MASSIVE_ACTIONS, (opt, key) => {
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
            <input type="checkbox" onChange={this.handleCheckAll}/>
            {this.renderMassiveActions()}
          </div>
        </div>
        <div className="refresh-bar ">
          <div className="col-xs-2 col-sm-1 col-lg-1 col-xs-offset-5 col-sm-offset-7 col-lg-offset-77">
            <button onClick={()=>{ FeedManager.update() ; NotificationManager.update()}} className="refresh-button"> <i className="fa fa-refresh" aria-hidden="true"></i></button>
          </div>
        </div>
         <div className="notifications col-xs-12">
            {
             (() => {
              if(FeedChest.state.feeds.length > 0){
                return (FeedChest.state.feeds.map((feed, i) => {
                 return <FeedNotification read={feed.read}
                                          bookmarked={feed.bookmarked}
                                          message={feed.message}
                                          repoName={feed.repo_name}
                                          id={feed.id}
                                          key={i}
                                          />
                }))
              } else {
                return (
                  <div className="no-feed col-xs-12">
                    <img src="/images/logo-octolive-404.png" alt="notfound" />
                    <p>
                      You don{"'"}t have any notification to show!
                      <br>
                      </br>
                      Active your feed by working with github.
                    </p>
                  </div>
                )
              }
             })()
            }
          </div>
       </div>
    </div>
    )
  }
}

export default FeedList;
