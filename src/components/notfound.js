import React, { Component } from 'react';
import './notfound.css';
import 'font-awesome/css/font-awesome.min.css';

class NotFound extends Component {

  render () {
    return (
    <div className="nf">
		<div className="not-found container">
			<img src="/images/logo-octolive-404.png" alt="notfound" />
			<h1>-Error 404-</h1>
			<p>I'm so sorry,<br></br> Why do you come here? When you know it makes things hard for me<br></br> D’You know what I mean?</p>
		</div>
    	
    </div>
    )
    
  }
}

export default NotFound;