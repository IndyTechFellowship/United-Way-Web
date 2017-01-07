import React, {Component} from 'react'
import ExperienceLogo from '/imports/ui/components/ExperienceLogo'
import VolunteerExperienceDescription from '/imports/ui/views/users/VolunteerExperienceList/VolunteerExperienceDescription'

class VolunteerExperienceContent extends Component {

  render() {
    return (
        <div style={styles.rowContainer}>
          <ExperienceLogo logoUrl={this.props.volunteerExperience.logoUrl}/>
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