import React, { Component } from 'react'

import UserBasicInfo from '/imports/ui/views/users/UserBasicInfo'
import VolunteerExperienceList from '/imports/ui/views/users/VolunteerExperienceList'
import ProfessionalExperience from '/imports/ui/views/users/professionalExperience/ProfessionalExperience'

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
          <UserBasicInfo avatarUrl={test_user.avatarUrl} name={test_user.name} />
        </div>
        <div style={styles.columnTwo}>
          <VolunteerExperienceList />
          <ProfessionalExperience />
        </div>
      </div>
    )
  }

}

export default UserPage
