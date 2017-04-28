import React, { Component } from 'react';
import './feed.css';
class Feed extends Component {
  render () {

    return (
    	<div className="col-xs-12"> 
			<div className="feed">
    		<div className="refresh-bar">
    			<button> <i className="fa fa-refresh" aria-hidden="true"></i></button>
    		</div>
				
			</div>
    	</div>
    )
  }
}

export default Feed;