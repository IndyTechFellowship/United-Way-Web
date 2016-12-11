import React, {Component} from 'react'

class VolunteerExperienceDescription extends Component {

  render() {
    let experience = this.props.experience
    let dateEnd = experience.current ? 'current' : experience.endMonth + ' ' + experience.endYear

    return (
        <div style={styles.descriptionContainer}>
          <div>{experience.jobTitle}</div>
          <div>{experience.companyName}</div>
          <div>{experience.startMonth} {experience.startYear} - {dateEnd}</div>
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