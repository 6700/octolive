import React, { Component } from 'react'

class EmptyAlert extends Component {
  render () {
    return (
      <div className="no-feed col-xs-12">
        <img src="/images/logo-octolive-404.png" alt="notfound" />
        <p>
          You don{'\''}t have any notification to show!
          <br/>
          <br/>
          Active your feed by working with github.
        </p>
      </div>
    )
  }
}

export default EmptyAlert
