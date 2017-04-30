import React, { Component } from 'react';
import './sidebar-line.css';
class SidebarLine extends Component {
  render () {

    return (
             	<div className="col-xs-12 linea">
             		<div className="col-xs-2 icon">
             			<i className="fa fa-envelope-open-o" aria-hidden="true"></i>
             		</div>
					<div className="col-xs-4">
             			<p>Inbox</p>
					</div>	
					<div className="col-xs-offset-4 col-xs-2">
						<div className="number">
							<p>3</p>
						</div>
					</div>
             	</div>
    )
  }
}

export default SidebarLine;