import React, { Component } from 'react';

import './landing.css';
class Landing extends Component {
  render () {
    return (
    <div className="home container">
    	<div className="hero">
    		
    		<div className="title">
    			<h1>Octolive</h1>
    		</div>	
    		<div className="subtitle">
    			<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
    		</div>
    		<button className="btn">Sign in</button>
    	</div>
    </div>
    )
  }
}

export default Landing;
