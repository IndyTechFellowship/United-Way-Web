import React, { Component } from 'react'

import UserCard from '/imports/ui/components/users/UserCard'

const test_user = {
  avatarUrl: 'http://www.thewrap.com/wp-content/uploads/2015/11/Donald-Trump.jpg'
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
          <UserCard avatarUrl={test_user.avatarUrl}/>
        </div>
        <div style={styles.columnTwo}>
          User { this.props.params.id } Column 2
        </div>
      </div>
    )
  }

}

export default UserPage
