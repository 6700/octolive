import React, { Component } from 'react';
class FavoriteRepos extends Component {
  constructor (props) {
    super(props);
    this.state = {
      repos: [
        {
          name: "octolive",
          owner: "6700"
        },
        {
          name: "tech-guides",
          owner: "wolox"
        }
      ]
    }
  }

  reposList = () => {
    return this.state.repos.map((repo, i) => {
      return (
        <li className="favorite-repo-item col-xs-4" key={i}>
          {repo.name}
        </li>
      );
    })
  }

  render () {
    return (
      <div className="favorite-repos">
        <h2>Tus repos favoritos son: </h2>
        <ul className="favorite-repos-list row">
          { this.reposList() }
        </ul>
      </div>
    )
  }
}

export default FavoriteRepos;
