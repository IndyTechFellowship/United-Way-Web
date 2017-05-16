import React, { Component } from 'react'

class VolunteerProfile extends Component {

  render() {
    return (
      <div style={styles.container}>
        Volunteer Profile
      </div>
    )
  }

}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default VolunteerProfile

