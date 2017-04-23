import React, { Component } from 'react';

import './landing.css';

import 'font-awesome/css/font-awesome.min.css';
class Landing extends Component {
  render () {
    return (
    <div>
    	<div className="hero">

    		<div className="title">
    			<h1>Octolive</h1>
    		</div>	
    		<div className="subtitle">
    			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
    		</div>
    		<button className="btn btn-default"><i className="fa fa-github" aria-hidden="true"></i>Sign in</button>
    	</div>
    </div>
    )
  }
}

export default Landing;
