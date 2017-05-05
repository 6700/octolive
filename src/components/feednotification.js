import React, { Component } from 'react';
import './feednotification.css';
import ApiRoutes from '../api_routes'
import NotificationManager from '../managers/notification_manager'

const { f } = window;

class FeedNotification extends Component {

  handleClick = () => {
    f(ApiRoutes.read_feed(this.props.id)).then((content) => {NotificationManager.update()})
  }

  render () {
    var bookmarkClass = "bookmark fa-2x fa fa-"
    if (this.props.bookmarked) {
        bookmarkClass += "bookmark"
    }else{
        bookmarkClass += "bookmark-o"
    }
    return (
    <div onclick={this.handleClick} className="feed-notification col-xs-12 ">
    	<div className="col-xs-2 col-sm-2 ">
    		<input type="checkbox" />
    		<i className={bookmarkClass} aria-hidden="true"></i>

    	</div>

    	<div className="col-xs-7 col-sm-7 comment">
    		<p>{this.props.message}</p>
    	</div>
    	<div className="col-xs-3 col-sm-3 repo-name">
    		<p className="col-xs-10">{this.props.repoName}</p>
    	</div>
    	<div className=" circle">
    	</div>
    </div>
    )
  }
}

export default FeedNotification;
