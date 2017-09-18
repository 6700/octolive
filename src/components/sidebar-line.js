import React, { Component } from 'react';
import './sidebar-line.css';
import FeedManager from '../managers/feed_manager'

const { NotificationChest, FeedChest } = window;
class SidebarLine extends Component {
  renderNotifications = () => {
    if (this.notificationsCount() > 0 && this.notificationsCount() <100) {
      return (
        <div className="number">
          <p>{this.notificationsCount() }</p>
        </div>
      )
    } else if (this.notificationsCount() > 99){
      return(
        <div className="number">
          <p>+99</p>
        </div>
      )
    }
  }

  notificationsCount = () => NotificationChest.state.notificationsCount[`${this.props.section}_count`]

  isCurrent = () => FeedChest.state.section === this.props.section
  handleClick = () => FeedManager.changeSection(this.props.section)

  render () {
    var iconClass = `fa fa-${this.props.icon}`;
    return (
      <div className={`col-xs-12 line ${this.isCurrent() && 'current'}`} onClick={this.handleClick}>
        <div className="col-xs-1 col-lg-2 icon">
          <i className={iconClass} aria-hidden="true"/>
     		</div>
				<div className="col-xs-7 col-lg-7">
     			<p>{this.props.text}</p>
				</div>
				<div className="col-xs-3 col-lg-3">
					{this.renderNotifications()}
				</div>
     	</div>
    )
  }
}

export default SidebarLine;
