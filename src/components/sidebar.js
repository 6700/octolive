import React, { Component } from 'react';
import './sidebar.css';
import SidebarLine from './sidebar-line';
import Line from './line'
import ApiRoutes from '../api_routes'
const { f } = window;
class Sidebar extends Component {
    constructor (props) {
        super(props)
        this.state = {
            notificationsCount: {}
        }
    }

    componentDidMount() {
        f(ApiRoutes.notification)
            .then((content) => {
                this.setState({
                    notificationsCount: content
                })
            })
    }

  render () {
                console.log(this.state);
    return (
    <div className="col-xs-12 sidebar"> 
        <div className="scrollbar2 col-xs-12" >
            <div className="force-overflow">
    			<SidebarLine text="Inbox" icon="envelope-open-o" notificationsCount={this.state.notificationsCount.inbox_count} />
    			<SidebarLine text="Archived" icon="check" notificationsCount={this.state.notificationsCount.archived_count}/>
                <SidebarLine text="Pending" icon="clock-o" notificationsCount={this.state.notificationsCount.pending_count}/>
    			<SidebarLine text="Important" icon="exclamation" notificationsCount={this.state.notificationsCount.important_count}/>
                <Line />
    			<SidebarLine text="Releases" icon="tags" notificationsCount={this.state.notificationsCount.releases_count}/>
    			<SidebarLine text="Pull Requests" icon="code-fork" notificationsCount={this.state.notificationsCount.pull_request_count}/>
    			<SidebarLine text="Mentions" icon="commenting-o" notificationsCount={this.state.notificationsCount.mentions_count}/>
    			<SidebarLine text="Issues" icon="exclamation-circle" notificationsCount={this.state.notificationsCount.issues_count}/>

    		</div>
    	</div>
    </div>
    )
  }
}

export default Sidebar;