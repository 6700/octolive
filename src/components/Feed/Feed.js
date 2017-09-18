import React, { Component } from 'react';
import FeedManager from '../../managers/feed_manager';
import './Feed.css';

class FeedNotification extends Component {

  handleClick = () => {
    FeedManager.markAsRead(this.props.id)
  }

  handleArchive = () => {
    FeedManager.archive([this.props.id]);
  }

  handleChange = (e) => {
    FeedManager.toggle(this.props.id)
  }

  handleSeen = (e) => {
    FeedManager.markAsRead([this.props.id])
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
    <a href={this.props.link} target="_blank" className={ feedClass }>
    	<div className="col-xs-2 col-sm-2 feed-actions">
    		<input type="checkbox" checked={!!this.props.checked} onChange={this.handleChange}/>
    		<a href="#">
          <i onClick={this.handleArchive} className={bookmarkClass} aria-hidden="true"></i>
        </a>
        <a href="#">
          <i onClick={this.handleSeen} className={`fa-2x fa fa-eye ${this.props.read || 'active'}`} aria-hidden="true"></i>
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
    </a>
    )
  }
}

export default FeedNotification;
