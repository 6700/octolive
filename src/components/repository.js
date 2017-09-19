import React, { Component } from 'react';
import './repository.css'
import SidebarLine from './sidebar-line';
class Repository extends Component {
	state = { notificationsCount: {} }

  render () {

    return (
    <div className="repository col-sm-6 col-md-4 col-xs-12 col-lg-4">
    	<div className="all-content col-xs-12">
	        <div className="col-xs-12 content">
				<nav className="repo-desc">
			    	<div className="col-xs-3">
				    	<img src={this.props.owner.avatar_url} alt="avatar" />
			    	</div>
			    	<div className="col-xs-9 repo-name-user">
			    		<div className="col-xs-12 name-and-button">
			    			<div className="col-xs-9 inside">
				    			<h2>{this.props.name}</h2>
				    			<p>@{this.props.owner.name}</p>
			    			</div>
			    			<div className="col-xs-3 favourite">
			    				<i className="fa fa-star-o" aria-hidden="true"></i>
			    			</div>
			    		</div>
			    	</div>
				</nav>
	    	</div>
	    	<div className="col-xs-12 repo-info">
	    		<SidebarLine text="Releases" icon="tags" notificationsCount={this.state.notificationsCount.releases_count}/>
	    		<SidebarLine text="Pull Requests" icon="code-fork" notificationsCount={this.state.notificationsCount.pull_request_count}/>
	    		<SidebarLine text="Mentions" icon="commenting-o" notificationsCount={this.state.notificationsCount.mentions_count}/>
	    		<SidebarLine text="Issues" icon="exclamation-circle" notificationsCount={this.state.notificationsCount.issues_count}/>
	    	</div>
				<a href={this.props.url} target="_blank" className="btn-access refresh-button">
					<p>
						Access
					</p>
				</a>
    	</div>
    </div>
    )
  }
}

export default Repository;
