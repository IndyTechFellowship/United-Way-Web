import React, { Component } from 'react'

import UserBasicInfo from '/imports/ui/components/UserProfileAboutMe/UserBasicInfo'

class UserPage extends Component {

  render() {
    return (
      <div>
        <div>User { this.props.params.id }</div>
        <UserBasicInfo/>
      </div>
    )
  }

}

export default UserPage
