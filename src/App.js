import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Home from './components/home.js'
import Sidebar from './components/sidebar.js'
import Feed from './components/feed.js'
import FeedNotification from './components/feednotification.js'
import Landing from './components/landing.js'
import AuthenticationChest from './chests/authentication_chest';
import SidebarLine from './components/sidebar-line'

class App extends Component {
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
