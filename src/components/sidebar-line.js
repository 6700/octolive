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
             		<div className="col-xs-1 col-lg-2 icon">
             			<i className={iconClass} aria-hidden="true"></i>
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