import React, { Component } from 'react'

import UserCard from '/imports/ui/views/users/UserCard'
import VolunteerExperienceList from '/imports/ui/views/users/volunteerExperienceList/VolunteerExperienceList'

const test_user = {
  avatarUrl: 'http://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg',
  name: "John Smith",
}

const styles = {
  twoColumnLayout: {
    display: "flex",
    flexWrap: "wrap",
  },
  columnOne: {
    flex: 2,
    minWidth: 200,
    padding: '10px',
  },
  columnTwo: {
    flex: 3,
    minWidth: 300,
  }
}

class UserPage extends Component {

  render() {
    return (
      <div style={styles.twoColumnLayout}>
        <div style={styles.columnOne}>
          <UserCard avatarUrl={test_user.avatarUrl} name={test_user.name} />
        </div>
        <div style={styles.columnTwo}>
          <VolunteerExperienceList />
        </div>
      </div>
    )
  }

}

export default UserPage
