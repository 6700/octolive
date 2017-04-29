import React, { Component } from 'react';
import './feed.css';
import FeedNotification from './feednotification.js';
class Feed extends Component {
  render () {

    return (
    <div className="col-xs-12 box"> 
    	<div className="feed">
    		<div className="col-xs-4">
    			<div className="side-inputs">
    				<input type="checkbox"/>
    				<select className="selector-feed" name="select">
    					<option value="value1" defaultValue>Marcar como leido </option> 
    					<option value="value2">Archivar</option>
    					<option value="value3">Recordarme más tarde</option>
    				</select>
    			</div>
    		</div>
    		<div className="refresh-bar ">
    			<div className="col-xs-2 col-sm-1 col-lg-1 col-xs-offset-5 col-sm-offset-7 col-lg-offset-77">
    				<button className="refresh-button"> <i className="fa fa-refresh" aria-hidden="true"></i></button>
    			</div>
    		</div>
    		<FeedNotification />
    	</div>
    </div>
    )
  }
}

export default Feed;