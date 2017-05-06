import React, { Component } from 'react';
import './repository.css'
import SidebarLine from './sidebar-line';
import ApiRoutes from '../api_routes';
const { f } = window;
class Repository extends Component {
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
	
    return (
    <div className="repository col-sm-6 col-md-4 col-xs-12 col-lg-4">
    	<div className="all-content col-xs-12">
	        <div className="col-xs-12 content">
				<nav className="repo-desc">
			    	<div className="col-xs-3">
				    	<img src="https://mir-s3-cdn-cf.behance.net/projects/202/df3a7d24539351.55077d06eed9a.png" alt="avatar" />
			    	</div>
			    	<div className="col-xs-9 repo-name-user">
			    		<div className="col-xs-12 name-and-button">
			    			<div className="col-xs-8">
				    			<h2>octolive</h2>
				    			<p>hdf1986</p>	
			    			</div>
			    			<div className="col-xs-4 favourite">
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
				<button className="btn-access refresh-button"> <p>Acceder</p></button>
	    	</div>
    	</div>
    </div>
    )
  }
}

export default Repository;