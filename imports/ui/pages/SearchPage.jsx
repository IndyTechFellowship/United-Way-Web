import React, { Component } from 'react'

class SearchPage extends Component {

  render() {
    return (<div>Search, query: { JSON.stringify(this.props.location.query) }</div>)
  }

}

export default SearchPage
