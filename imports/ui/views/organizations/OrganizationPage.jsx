import React, { Component } from 'react'

import OrganizationBasicInfo from '/imports/ui/views/organizations/OrganizationBasicInfo'

const test_org = {
  avatarUrl: 'http://unitedwaymoore.com/wp-content/uploads/united_way.jpg',
  name: "United Way",
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

class OrganizationPage extends Component {

  render() {
    return (
      <div style={styles.twoColumnLayout}>
        <div style={styles.columnOne}>
          Column 1 (org { this.props.params.id })
          <OrganizationBasicInfo/>
        </div>
        <div style={styles.columnTwo}>
          Column 2 (org { this.props.params.id })
        </div>
      </div>
    )
  }

}

export default OrganizationPage
