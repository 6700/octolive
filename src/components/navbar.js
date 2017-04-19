import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      userName: "Placeholder"
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
            <a className="navbar-brand" href="#">Octolive</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <form className="navbar-form navbar-left">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search"/>
              </div>
            </form>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">{ this.state.userName }</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
