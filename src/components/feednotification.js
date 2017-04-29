import React, { Component } from 'react';
import './feednotification.css';

class FeedNotification extends Component {
  render () {

    return (
	    <div className="feed-notification col-xs-12 ">
	    	<div className="col-xs-2 col-sm-2 ">
		    	<input type="checkbox" />
			    <i className="bookmark fa-2x fa fa-bookmark " aria-hidden="true"></i>
	
	    	</div>

	    	<div className="col-xs-7 col-sm-7 comment">
	    		<p>Someone commented on your Pull request #19 </p> 
	    	</div>
	    	<div className="col-xs-3 col-sm-3 repo-name">
	    		<p className="col-xs-10">6700/octolive</p>
	    	</div>
	    	<div className=" circle">
	    	</div>
	    </div>
    )
  }
}

export default FeedNotification;