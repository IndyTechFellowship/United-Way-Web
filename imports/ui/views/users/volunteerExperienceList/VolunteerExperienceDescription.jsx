import React, {Component} from 'react'

class VolunteerExperienceDescription extends Component {

  render() {
    let experience = this.props.experience
    let dateEnd = experience.endDate === null ? 'present' : experience.endDate.toISOString()

    return (
        <div style={styles.descriptionContainer}>
          <div>{experience.jobTitle}</div>
          <div>{experience.companyName}</div>
          <div>{experience.startDate.toISOString()} - {dateEnd}</div>
          <div>{experience.description}</div>
        </div>
    )
  }
}

const styles = {
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

export default VolunteerExperienceDescription