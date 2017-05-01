import React, { Component } from 'react';
import './sidebar.css';
import SidebarLine from './sidebar-line';
import Line from './line'
class Sidebar extends Component {
  render () {

    return (
    <div className="col-xs-12 sidebar"> 
    	<div className="scrollbar2 col-xs-12" >
    		<div className="force-overflow">

    			<SidebarLine text="Inbox" icon="envelope-open-o" notificationsCount="3" />
    			<SidebarLine text="Archived" icon="check" notificationsCount="2"/>
                <SidebarLine text="Pending" icon="clock-o" notificationsCount="1"/>
    			<SidebarLine text="Important" icon="exclamation" notificationsCount="1"/>
                <Line />
    			<SidebarLine text="Releases" icon="tags" notificationsCount="1"/>
    			<SidebarLine text="Pull Requests" icon="code-fork" notificationsCount="2"/>
    			<SidebarLine text="Mentions" icon="commenting-o" notificationsCount="2"/>
    			<SidebarLine text="Issues" icon="exclamation-circle" notificationsCount="2"/>

    		</div>
    	</div>
    </div>
    )
  }
}

export default Sidebar;