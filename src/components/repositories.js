import React, { Component } from 'react';
import './repositories.css'
import Repository from './repository.js'
class Repositories extends Component {
  render () {

    return (
    <div className="repositories"> 
	    <div className="container">
	    	<div className="add-repo col-xs-12">
	    		<button className="btn-repo refresh-button"><p>+</p></button>
	    	</div>
	    	<div className="repo-box">
	    	<Repository/>
	    	</div>
	    </div>
    </div>
    )
  }
}

export default Repositories;