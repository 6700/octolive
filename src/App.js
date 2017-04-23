import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Home from './components/home.js'
import Landing from './components/landing.js'
import AuthenticationChest from './chests/authentication_chest';

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
