import React, {Component} from 'react'

import VolunteerExperienceList from '/imports/ui/views/users/volunteerExperienceList/VolunteerExperienceList'

class UserPage extends Component {

  render() {
    return (
        <div>
          <div>User { this.props.params.id }</div>
          <VolunteerExperienceList />
        </div>
    )
  }

}

export default UserPage