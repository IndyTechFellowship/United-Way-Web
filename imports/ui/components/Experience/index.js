import React, { Component } from 'react'

import ExperienceLogo from '/imports/ui/components/Experience/ExperienceLogo'
import ExperienceHeader from './ExperienceHeader'
import ExperienceDescription from './ExperienceDescription'

class Experience extends Component {

  render() {
    return (
      <div style={styles.experience}>
        <div style={styles.header}>
          <ExperienceHeader experience={this.props.experience} />
        </div>
        <div style={styles.description}>
          <ExperienceDescription description={this.props.experience.description} />
        </div>
      </div>
    )
  }

}

const styles = {
  experience: {
    paddingBottom: '10px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  }
}

export default Experience
