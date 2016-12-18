import React, { Component, PropTypes } from 'react'

import Loading from '/imports/ui/components/Loading'
import UserBasicInfo from '/imports/ui/views/users/UserBasicInfo'
import VolunteerExperienceList from '/imports/ui/views/users/VolunteerExperienceList'

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
    if(this.props.loading) {
      return <Loading />
    } else {
      return (
        <div style={styles.twoColumnLayout}>
          <div style={styles.columnOne}>
            <UserBasicInfo avatarUrl={this.props.user.profile.avatarUrl} name={`${this.props.user.profile.firstName} ${this.props.user.profile.lastName}`} />
          </div>
          <div style={styles.columnTwo}>
            <VolunteerExperienceList />
          </div>
        </div>
      )
    }
  }

}

UserPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
}

export default UserPage
