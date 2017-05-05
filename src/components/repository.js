import React, { Component } from 'react';
import './repository.css'
class Repository extends Component {
  render () {

    return (
    <div className="repository col-sm-4 col-xs-12 col-lg-4">
        <div className="col-xs-12">
			<nav className="repo-desc">
		    	<div col-xs-6>
			    	<img src="https://mir-s3-cdn-cf.behance.net/projects/202/df3a7d24539351.55077d06eed9a.png" alt="avatar" />
		    	</div>
		    	<div col-xs-6>
			    	<h2>octolive</h2>
			    	<p>hdf1986</p>	
		    	</div>
			</nav>
    	</div>
    </div>
    )
  }
}

export default Repository;