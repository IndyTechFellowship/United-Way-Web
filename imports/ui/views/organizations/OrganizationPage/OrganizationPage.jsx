import React, { Component, PropTypes } from 'react'

import AboutUsMission from '/imports/ui/views/organizations/AboutUsMission'
import Loading from '/imports/ui/components/Loading'
import OrganizationBasicInfo from '/imports/ui/views/organizations/OrganizationBasicInfo'
import PositionsList from '/imports/ui/views/positions/PositionsList'

const styles = {
  twoColumnLayout: {
    display: "flex",
  },
  column: {
    flex: '1 1 50%',
    overflow: 'hidden',
    padding: '8px'
  }
}

class OrganizationPage extends Component {

  render() {
    if(this.props.loading) {
      return <Loading />
    } else {
      let positionsQuery = { _id: { $in: this.props.organization.positions }}

      return (
        <div>
          <div style={styles.twoColumnLayout}>
            <div style={styles.column}>
              <OrganizationBasicInfo organization={this.props.organization}/>
            </div>
            <div style={styles.column}>
              <AboutUsMission organization={this.props.organization}/>
            </div>
          </div>
          <PositionsList query={positionsQuery} organization={this.props.organization} />
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
