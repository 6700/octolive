import React, { Component } from 'react';
import FavoriteRepos from './favorite_repos.js';
import Feed from './feed.js';
import Sidebar from './sidebar.js';
import './home.css';
class Home extends Component {
  render () {

    return (
    <div className="home container-fuid">
    	<div className="col-xs-3 col-lg-3 col-sm-3"> 
			<Sidebar/>
    	</div>	
    	<div className="col-xs-9 col-lg-9 col-sm-9">
    		<Feed />
    	</div>
    </div>
    )
  }
}

export default Home;
