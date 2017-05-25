import React, { Component } from 'react';
import AuthenticationChest from '../chests/authentication_chest';
import AuthenticationManager from '../managers/authentication_manager'
import './navbar.css';


class Navbar extends Component {
  componentDidMount = () => {
    AuthenticationChest.register(this)
  }

  componentWillUnmount = () => {
    AuthenticationChest.unregister(this)
  }

  logOut = () => {
    AuthenticationManager.logOut()
  }
  logIn = () => {
    AuthenticationManager.logIn()
  }
  renderUsername = () => {
    if(AuthenticationChest.state.isLogged){
      return (
        <div className="container-fluid">
          <ul className="navbar-left">
            <li className="routes ">
                <a href="/#/repositories">Repositories</a>
            </li>
            <li className="routes">
              <a href="#">Feed</a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">       
            <li className="user-data">
              <a href="#">
                <img src={AuthenticationChest.state.user.avatar_url} height={30} alt=""/>
                @{ AuthenticationChest.state.user.show_name }
              </a>
            </li>
            <li>
              <a onClick={this.logOut} href="#">Log out</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <ul className="nav navbar-nav navbar-right">
          <li className="not-logged">
            <a onClick={this.logIn} href="#">
              Log in
            </a>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#/">Octolive</a>
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
