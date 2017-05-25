import React, { Component } from 'react';
import './feednotification.css';
import ApiRoutes from '../api_routes'
import NotificationManager from '../managers/notification_manager'
import FeedManager from '../managers/feed_manager';

const { f } = window;

class FeedNotification extends Component {

  handleClick = () => {
    f(ApiRoutes.read_feed(this.props.id)).then((content) => { NotificationManager.update(); FeedManager.update(); })
  }

  handleArchive = () => {
    f(ApiRoutes.archive_feed(this.props.id)).then((content) => { NotificationManager.update(); FeedManager.update(); })
  }

  render () {
    var bookmarkClass = "bookmark fa-2x fa fa-"
    var feedClass = "feed-notification col-xs-12 ";
    if (this.props.read) {
      feedClass += "read";
    }

    if (this.props.bookmarked) {
        bookmarkClass += ""
    } else {
        bookmarkClass += "check"
    }
    return (
    <div className={ feedClass }>
    	<div className="col-xs-2 col-sm-2 ">
    		<input type="checkbox" />
    		<a href="#">
                <i onClick={this.handleArchive} className={bookmarkClass} aria-hidden="true"></i>
            </a>
    	</div>

    	<div onClick={this.handleClick} className="col-xs-7 col-sm-7 comment">
    		<p>{this.props.message}</p>
    	</div>
    	<div onClick={this.handleClick} className="col-xs-3 col-sm-3 repo-name">
    		<p className="col-xs-10">{this.props.repoName}</p>
    	</div>
    	<div onClick={this.handleClick} className=" circle">
    	</div>
    </div>
    )
  }
}

export default FeedNotification;
