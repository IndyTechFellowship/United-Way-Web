import React, { Component, PropTypes } from 'react'

import { createContainer } from 'meteor/react-meteor-data'

import Loading from '/imports/ui/components/Loading'
import OrganizationBasicInfo from '/imports/ui/views/organizations/OrganizationBasicInfo'
import PositionsList from '/imports/ui/views/organizations/PositionsList'

import { Positions } from '/imports/api/Positions'

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
            <PositionsList positions={this.props.positions}/>
          </div>
          <div style={styles.columnTwo}>
            (About Us Mission goes here)
          </div>
        </div>
      )
    }
  }

}

OrganizationPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  organization: PropTypes.object.isRequired,
  positions: PropTypes.array.isRequired,
}

// TODO: create positionListStateContainer instead - pass in query as parameter (ie. instead of organization)
export default createContainer(({ organization }) => {
  const query = { organizationId: organization._id }
  const handle = Meteor.subscribe('Positions.get', query);
  if (!handle.ready()) {
    return { positions: []}
  } else {
    // return { positions: Positions.find({ _id: { $in: organization.positions }}).fetch() }
    return { positions: organization.getPosition() }
  }
  // const positions = organization.getPositions();
  // return {
  //   positions: Positions.find({ _id: { $in: organization.positions }}).fetch()
  // }
}, OrganizationPage);

// export default OrganizationPage
