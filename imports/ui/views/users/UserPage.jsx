import React, {Component} from 'react'

import UserBasicInfo from '/imports/ui/views/users/UserBasicInfo'
import VolunteerExperienceList from '/imports/ui/views/users/VolunteerExperienceList'

class UserPage extends Component {

  render() {
    return (
        <div>
          <div>User { this.props.params.id }</div>
          <UserBasicInfo />
          <VolunteerExperienceList />
        </div>
    )
  }

}

export default UserPage
