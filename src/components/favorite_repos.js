import React, { Component } from 'react';
class FavoriteRepos extends Component {
  constructor (props) {
    super(props);
    this.state = {
      repos: [
        {
          name: "octolive",
          owner: {
            name: "6700",
            pic: "https://avatars2.githubusercontent.com/u/21012703?v=3&s=200"
          }
        },
        {
          name: "tech-guides",
          owner: {
            name: "wolox",
            pic: "https://avatars3.githubusercontent.com/u/1046241?v=3&s=200"
          }
        }
      ]
    }
  }

  reposList = () => {
    return this.state.repos.map((repo, i) => {
      return (
        <li className="col-xs-4" key={i}>
          <div className="col-xs-12 favorite-repo-item">
            <h3 className="text-left">{repo.name}</h3>
            <div className="media">
              <div className="media-left">
                <a href="#">
                  <img className="media-object" src={ repo.owner.pic } alt="..." width="64" height="64"/>
                </a>
              </div>
              <div className="media-body">
                { repo.owner.name }
              </div>
            </div>
          </div>
        </li>
      );
    })
  }

  render () {
    return (
      <div className="favorite-repos">
        <h2 className="col-xs-12">
          <div className="col-xs-12">
            Tus repos favoritos son:
          </div>
        </h2>
        <ul className="favorite-repos-list row">
          { this.reposList() }
        </ul>
      </div>
    )
  }
}

export default FavoriteRepos;
