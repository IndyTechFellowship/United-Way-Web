import React, { Component } from 'react'

class UserPage extends Component {

  render() {
    return (<div>User { this.props.params.id }</div>)
  }

}

export default UserPage
