import React, { Component } from 'react';
import './feed.css';
import ApiRoutes from '../api_routes';
import FeedNotification from './feednotification.js';
const { f } = window;
class Feed extends Component {
  constructor (props) {
        super(props)
        this.state = {
            feeds: []
        }
    }

    componentDidMount() {
      f(ApiRoutes.feeds)
        .then((content) => {
          this.setState({
            feeds: content.data.map( (feed) => {
              return {
                bookmarked:feed.bookmarked,
                id:feed.id,
                message:feed.message,
                repo_name:feed.repo_name

              }
            })
          })
        })
    }
  render () {

    return (
    <div className="col-xs-12 box">
      <div className="feed">
          <div className="col-xs-4">
             <div className="side-inputs">
                <input type="checkbox"/>
                <select className="selector-feed" name="select">
                   <option value="value1" defaultValue>Marcar como leido </option>
                   <option value="value2">Archivar</option>
                   <option value="value3">Recordarme más tarde</option>
               </select>
           </div>
       </div>
       <div className="refresh-bar ">
            <div className="col-xs-2 col-sm-1 col-lg-1 col-xs-offset-5 col-sm-offset-7 col-lg-offset-77">
                <button className="refresh-button"> <i className="fa fa-refresh" aria-hidden="true"></i></button>
            </div>
        </div>
         <div className="notifications col-xs-12">
                {
                  this.state.feeds.map((feed, i) => {
                    return <FeedNotification read={feed.read} bookmarked={feed.bookmarked} message={feed.message} repoName={feed.repo_name} id={feed.id} key={i}/>
                  })
                }
        </div>
       </div>
    </div>
    )
  }
}

export default Feed;
