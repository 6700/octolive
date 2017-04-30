import React, { Component } from 'react';
import './sidebar.css';
import SidebarLine from './sidebar-line';
class Sidebar extends Component {
  render () {

    return (
    <div className="col-xs-12 sidebar"> 
    	<div className="scrollbar2 col-xs-12" >
    		<div className="force-overflow">

    			<SidebarLine />
    			<SidebarLine />
    			<SidebarLine />
    			<SidebarLine />
    			<div className="col-xs-12">
    				<hr className="style14" />
    			</div>
    			<SidebarLine />
    			<SidebarLine />
    			<SidebarLine />
    			<SidebarLine />
    			<div className="col-xs-12">
    				<hr className="style14" />
    			</div> 
    			<SidebarLine />
    			<SidebarLine />
    			<SidebarLine />
    			<SidebarLine />
    		</div>
    	</div>
    </div>
    )
  }
}

export default Sidebar;