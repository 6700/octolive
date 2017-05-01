import React, { Component } from 'react';
import './sidebar-line.css';
class SidebarLine extends Component {
    renderNotifications = () => {
        if (this.props.notificationsCount > 0) {
            return (
                <div className="number">
                    <p>{this.props.notificationsCount}</p>
                </div>
            )
        }
    }
  render () {
    var iconClass = "fa fa-" + this.props.icon;
    return (
             	<div className="col-xs-12 line">
             		<div className="col-xs-2 icon">
             			<i className={iconClass} aria-hidden="true"></i>
             		</div>
					<div className="col-xs-8">
             			<p>{this.props.text}</p>
					</div>	
					<div className="col-xs-2">
						{this.renderNotifications()}
					</div>
             	</div>
    )
  }
}

export default SidebarLine;