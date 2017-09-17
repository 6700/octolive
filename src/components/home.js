import React, { Component } from 'react';
import FeedList from './FeedList';
import Sidebar from './Sidebar';
import './home.css';
class Home extends Component {
  render () {
    return (
      <div className="home container-fuid">
      	<div className="col-xs-3 col-lg-3 col-sm-3 wrapper-sidebar">
  			   <Sidebar/>
      	</div>
      	<div className="col-xs-9 col-lg-9 col-sm-9 wrapper-feedlist">
      		<FeedList />
      	</div>
      </div>
    )
  }
}

export default Home;
