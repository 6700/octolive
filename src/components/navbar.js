import React, { Component } from 'react';
import AuthenticationChest from '../chests/authentication_chest';
import './navbar.css';

class Navbar extends Component {
  componentDidMount = () => {
    AuthenticationChest.register(this)
  }

  componentWillUnmount = () => {
    AuthenticationChest.unregister(this)
  }

  renderUsername = () => {
    if(AuthenticationChest.state.isLogged){
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              { AuthenticationChest.get("user")["name"] }
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="">
              Iniciar sesión
            </a>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Octolive</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
            </form>
            { this.renderUsername() }
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
