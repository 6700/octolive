import React, { Component } from 'react';

import './App.css';
import './chests/authentication_chest';
import './chests/notification_chest';
import './chests/feed_chest';
import './helpers/requests';
import Navbar from './components/navbar.js'
import AuthenticationManager from './managers/authentication_manager'
import Repositories from './components/repositories.js'
import Home from './components/home'
import Landing from './components/landing'
import NotFound from './components/notfound'
import { Route, Switch } from 'react-router-dom';



const AuthenticationChest = window.AuthenticationChest;

class App extends Component {
  componentDidMount() {
    AuthenticationChest.register(this)
    AuthenticationManager.checkLoginStatus();
  }

  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          {
            (() => {
              if(AuthenticationChest.state.isLogged) {
                return (
                 <div>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/repositories' component={Repositories} />
                  </div>
                  )
              } else {
                return (
                  <Route exact path='/' component={Landing}/>
                )
              }
            })()
          }
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
