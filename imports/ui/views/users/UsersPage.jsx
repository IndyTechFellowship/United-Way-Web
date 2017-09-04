import React, { Component } from 'react'

import Content from '/imports/ui/components/Content'
import UsersList from './UsersList'

class UsersPage extends Component {

  render() {
    return <Content><UsersList /></Content>
  }

}

export default UsersPage
