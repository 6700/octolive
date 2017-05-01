import React, { Component } from 'react';
import ApiRoutes from '../api_routes'

import './landing.css';

import 'font-awesome/css/font-awesome.min.css';
class Landing extends Component {
  logIn = () => {
    fetch(ApiRoutes.sign_in_redirection)
      .then((response) => response.json())
      .then((content) => {
        document.location.href = content.url
      })
  }

  render () {
    return (
    <div>
    	<div className="hero">
    		<div className="logo">
    			{/*<img src="/images/logo.svg" alt="logo"/>*/}
    		</div>
    		<div className="title">
    			<h1>Octolive</h1>
    		</div>
    		<div className="subtitle">
    			<h2>Make github notifications great again! </h2>
    		</div>
    		<button onClick={this.logIn} className="btn btn-default"><i className="fa fa-github" aria-hidden="true"></i>Sign in</button>
    	</div>
    	<div className="description">

    		<div className="container marketing">
    			<div className="row">
    				<div className="block col-lg-4 col-sm-4">

    					<p><i className="fa fa-snowflake-o fa-5x" aria-hidden="true"></i></p>
    					<h2>Realtime</h2>
    					<p className="descript-text">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
    					<p><a className="btn btn-default" href="#" role="button">View details &raquo; 	</a></p>
    				</div>
    				<div className="block col-lg-4 col-sm-4">
    					<p><i className="fa fa-user-circle" aria-hidden="true"></i></p>
    					<h2>Heading</h2>
    					<p className="descript-text">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
    					<p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
    				</div>
    				<div className="block col-lg-4 col-sm-4">
    					<p><i className="fa fa-handshake-o" aria-hidden="true"></i></p>
    					<h2>Heading</h2>
    					<p className="descript-text">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
    					<p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
    				</div>

    			</div>
    		</div>
    	</div>
    	{/* <div className="container">
    		<div className="about">
    		<img src="/vline.gif" width="1" height="80%" hspace="0" border="0" />
    			<ul >
    				<li></li>
    				<li></li>
    			</ul>
    		</div>
    	</div> */}
    </div>
    )

  }
}

export default Landing;
