import React, { Component } from 'react'

import VolunteerExperienceList from '/imports/ui/components/UserProfileVolunteerExperience/VolunteerExperienceList'
import UserBasicInfo from '/imports/ui/components/UserProfileAboutMe/UserBasicInfo'

class UserPage extends Component {

  render() {
    return (
      <div>
        <div>User { this.props.params.id }</div>
        <UserBasicInfo/>
        <VolunteerExperienceList />
      </div>
    )
  }

}

export default UserPage
