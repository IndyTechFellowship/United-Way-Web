import React, {Component} from 'react'

import Experience from '/imports/ui/components/Experience'
import Title from '/imports/ui/components/Title'

class VolunteerExperienceList extends Component {

  render() {
    let volunteerExperienceList = this.props.experiences.map((item) => {
      return <Experience key={item._id} experience={item}/>
    })

    return (
        <div style={styles.listContainer}>
          <Title>Volunteer Experience</Title>
          <div style={styles.listContainer}>
            { volunteerExperienceList }
          </div>
        </div>
    )
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px',
  },
}

export default VolunteerExperienceList
