import React, { Component, PropTypes } from 'react'

import AboutUsMission from '/imports/ui/views/organizations/AboutUsMission'
import Loading from '/imports/ui/components/Loading'
import OrganizationBasicInfo from '/imports/ui/views/organizations/OrganizationBasicInfo'
import PositionsList from '/imports/ui/views/positions/PositionsList'

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
      let positionsQuery = { _id: { $in: this.props.organization.positions }}

      return (
        <div style={styles.twoColumnLayout}>
          <div style={styles.columnOne}>
            <OrganizationBasicInfo organization={this.props.organization}/>
            <PositionsList query={positionsQuery} organization={this.props.organization} />
          </div>
          <div style={styles.columnTwo}>
            <AboutUsMission organization={this.props.organization}/>
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
