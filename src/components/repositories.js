import React, { Component } from 'react';
import './repositories.css'

import '../chests/repositories_chest';
import Repository from './repository.js'
const { RepositoriesChest } = window;
import RepositoriesManager from '../managers/repositories_manager'

class Repositories extends Component {
  componentDidMount () {
    RepositoriesChest.register(this)
    RepositoriesManager.update()
  }

  componentWillUnmount () {
    RepositoriesChest.unregister(this)
  }

  render () {

    return (
    <div className="repositories">
	    <div className="container">
	    	<div className="add-repo col-xs-12">
	    		<button className="btn-repo refresh-button"><p>+</p></button>
	    	</div>
	    		<div className="repo-box">
	    			<div className="col-xs-12">
              {RepositoriesChest.state.repositories.map(
                repository => <Repository {...repository} key={repository.id} />
              )}
	    			</div>
	    		</div>
	    </div>
    </div>
    )
  }
}

export default Repositories;
