import React, { Component } from 'react';

import './landing.css';

import 'font-awesome/css/font-awesome.min.css';
class Landing extends Component {
  render () {
    return (
    <div>
    	<div className="hero">
			<div className="logo">
				<img src="/images/logo.svg" alt="logo"/>
			</div>
    		<div className="title">
    			<h1>Octolive</h1>
    		</div>
    		<div className="subtitle">
    			<h2>Make github notifications great again! </h2>
    		</div>
    		<button className="btn btn-default"><i className="fa fa-github" aria-hidden="true"></i>Sign in</button>
    	</div>
    	<div className="description marketing">
    		<div className="row">
    			<div className=" center col-lg-3 col-sm-3 col-sm-offset-3">
    				<img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="140" height="140"/>
    				<h2>Heading</h2>
    				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    				<button className="button btn btn-default" href="#" role="button"><a>View details &raquo;</a></button>
    			</div>
    			<div className="center col-lg-3 col-sm-3 ">
    				<img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="140" height="140"/>
    				<h2>Heading</h2>
    				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    				<button className="button btn btn-default" href="#" role="button"><a>View details &raquo;</a></button>
    			</div>
    			<div className="center col-lg-3 col-sm-3 ">
    				<img className="img-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="140" height="140"/>
    				<h2>Heading</h2>
    				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    				cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    				<button className="button btn btn-default" href="#" role="button"><a>View details &raquo;</a></button>
    			</div>
    		</div>
    	</div>
    </div>
    )
  }
}

export default Landing;
