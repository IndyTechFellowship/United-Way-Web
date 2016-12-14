import React, {Component} from 'react'

import VolunteerExperienceList from '/imports/ui/views/users/volunteerExperienceList/VolunteerExperienceList'
import ProfessionalExperience from '/imports/ui/views/users/professionalExperience/ProfessionalExperience'

class UserPage extends Component {

  render() {
    return (
        <div>
          <div>User { this.props.params.id }</div>
          <VolunteerExperienceList />
          <ProfessionalExperience />
        </div>
    )
  }

}

export default UserPage
