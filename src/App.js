import React, { Component } from 'react';
import './App.css';
import './chests/authentication_chest';
import './helpers/requests';
import Navbar from './components/navbar.js'
import Home from './components/home.js'
import Landing from './components/landing.js'
import AuthenticationManager from './managers/authentication_manager'
import Feed from './components/feed.js'
import FeedNotification from './components/feednotification.js'
import SidebarLine from './components/sidebar-line'
const AuthenticationChest = window.AuthenticationChest;

class App extends Component {
  componentDidMount() {
    AuthenticationChest.register(this)
    AuthenticationManager.checkLoginStatus();
  }

  render() {
    var component;

    if(AuthenticationChest.state.isLogged)
    {
      component = <Home/>;
    }
    else 
    {
      component = <Landing/>;
    }
    return (
      <div className="App">
        <Navbar/>
        { component }
        
      </div>
    );
  }
}

export default App;
