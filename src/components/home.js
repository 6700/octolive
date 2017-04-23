import React, { Component } from 'react';
import FavoriteRepos from './favorite_repos.js';

class Home extends Component {
  render () {
    return (
      <div className="home container">
        <FavoriteRepos/>
      </div>
    )
  }
}

export default Home;
