import React, { Component } from 'react';
import './sidebar.css';
import SidebarLine from './sidebar-line';
import Line from './line'
import NotificationManager from '../managers/notification_manager'
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
    <div className="col-xs-12 sidebar">
        <div className="scrollbar2 col-xs-12" >
            <div className="force-overflow">
    			<SidebarLine text="Inbox" icon="envelope-open-o" notificationsCount={NotificationChest.state.notificationsCount.inbox_count} />
    			<SidebarLine text="Archived" icon="check" notificationsCount={NotificationChest.state.notificationsCount.archived_count}/>
                <SidebarLine text="Pending" icon="clock-o" notificationsCount={NotificationChest.state.notificationsCount.pending_count}/>
    			<SidebarLine text="Important" icon="exclamation" notificationsCount={NotificationChest.state.notificationsCount.important_count}/>
                <Line />
    			<SidebarLine text="Releases" icon="tags" notificationsCount={NotificationChest.state.notificationsCount.releases_count}/>
    			<SidebarLine text="Pull Requests" icon="code-fork" notificationsCount={NotificationChest.state.notificationsCount.pull_requests_count}/>
    			<SidebarLine text="Mentions" icon="commenting-o" notificationsCount={NotificationChest.state.notificationsCount.mentions_count}/>
    			<SidebarLine text="Issues" icon="exclamation-circle" notificationsCount={NotificationChest.state.notificationsCount.issues_count}/>

    		</div>
    	</div>
    </div>
    )
  }
}

export default Sidebar;
