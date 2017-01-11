import React, { Component, PropTypes } from 'react'

import Loading from '/imports/ui/components/Loading'
import OrganizationBasicInfo from '/imports/ui/views/organizations/OrganizationBasicInfo'

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
    if(this.props.loading) {
      return <Loading />
    } else {
      return (
        <div style={styles.twoColumnLayout}>
          <div style={styles.columnOne}>
            <OrganizationBasicInfo organization={this.props.organization}/>
          </div>
          <div style={styles.columnTwo}>
            Column 2 (org { this.props.params.id })
          </div>
        </div>
      )
    }
  }

}

OrganizationPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  organization: PropTypes.object.isRequired,
}

export default OrganizationPage
