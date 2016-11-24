import React, { Component } from 'react'

const styles = {
  twoColumnLayout: {
    display: "flex",
    alignItems: "stretch",
    flexWrap: "wrap",
  },
  columnOne: {
    flex: 2,
    minWidth: 300,
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
          User { this.props.params.id } Column 1
        </div>
        <div style={styles.columnTwo}>
          User { this.props.params.id } Column 2
        </div>
      </div>
    )
  }

}

export default UserPage
