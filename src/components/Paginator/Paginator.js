import React, { Component } from 'react'
import map from 'lodash/map'

class Paginator extends Component {
  defaultProps = {
    className: '',
    items: null,
    itemComponent: 'div',
    paddingFetch: 10,
    maxPage: 1,
    onNextPage: () => {},
    emptyComponent: 'div',
    loadingComponent: 'div'
  }

  state = { loadingNextPage: false, page: 1 }

  checkNextPage = (e) => {
    if(this.state.page + 1 > this.props.maxPage) return;
    if(!this.state.loadingNextPage && e.target.scrollTop + 10 >= e.target.scrollHeight - e.target.clientHeight) {
      this.setState({ page: this.state.page + 1, loadingNextPage: true }, () => this.props.onNextPage().then(() => {
        this.setState({ loadingNextPage: false })
      }))
    }
  }

  render () {
    if(this.props.items === null) {
      return (
        <div className={this.props.className}>
          <this.props.loadingComponent />
        </div>
      )
    } else if(this.props.items.length > 0) {
      return (
        <div className={this.props.className} onScroll={this.checkNextPage}>
          {map(this.props.items, (item, i) => <this.props.itemComponent {...item} key={i}/>)}
          {this.state.loadingNextPage &&
            <div className="feed-notification col-xs-12">Cargando...</div>
          }
        </div>
      )
    } else {
      return (
        <div className={this.props.className}>
          <this.props.emptyComponent />
        </div>
      )
    }
  }
}

export default Paginator
