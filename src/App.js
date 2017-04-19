import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar.js'
import Home from './components/home.js'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    );
  }
}

export default App;
