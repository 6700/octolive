import React, { Component } from 'react';
import './sidebar.css';
import SidebarLine from '../sidebar-line';
import Line from '../line'
import NotificationManager from '../../managers/notification_manager'
const { NotificationChest } = window;

class Sidebar extends Component {
  componentDidMount() {
    NotificationManager.update()
    NotificationChest.register(this)
  }
  componentWillUnmount () {
    NotificationChest.unregister(this)
  }

  render () {
    return (
      <div className="col-xs-12 sidebar no-margin">
        <div className="scrollbar2 col-xs-12" >
          <div className="force-overflow">
    			<SidebarLine text="Inbox" icon="envelope-open-o" section="inbox" />
    			<SidebarLine text="Archived" icon="check" section="archived"/>
          <SidebarLine text="Pending" icon="clock-o" section="pending"/>
    			<SidebarLine text="Important" icon="exclamation" section="important"/>
          <Line />
    			<SidebarLine text="Releases" icon="tags" section="releases"/>
    			<SidebarLine text="Pull Requests" icon="code-fork" section="pull_requests"/>
    			<SidebarLine text="Mentions" icon="commenting-o" section="mentions"/>
    			<SidebarLine text="Issues" icon="exclamation-circle" section="issues"/>

      		</div>
      	</div>
      </div>
    )
  }
}

export default Sidebar;
