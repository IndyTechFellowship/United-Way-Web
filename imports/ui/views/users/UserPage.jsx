import React, { Component } from 'react'

import UserView from '/imports/ui/views/users/UserPage/UserView'

class UserPage extends Component {

  render() {
    return <UserView id={this.props.params.id} />
  }

}

export default UserPage
