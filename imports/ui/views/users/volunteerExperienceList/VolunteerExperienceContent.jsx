import React, {Component} from 'react'
import OrganizationLogo from '/imports/ui/views/users/volunteerExperienceList/OrganizationLogo'
import VolunteerExperienceDescription from '/imports/ui/views/users/volunteerExperienceList/VolunteerExperienceDescription'

class VolunteerExperienceContent extends Component {

  render() {
    return (
        <div style={styles.rowContainer}>
          <OrganizationLogo logoUrl={this.props.volunteerExperience.logoUrl}/>
          <VolunteerExperienceDescription experience={this.props.volunteerExperience}/>
        </div>
    )
  }
}

const styles = {
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
  }
}

export default VolunteerExperienceContent