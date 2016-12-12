import React, {Component} from 'react'

import {FlatButton} from 'material-ui'

import OrganizationDetails from './OrganizationDetails'

class OrganizationBasicInfo extends Component {
  render() {
    return (
      <div>
        <div style={styles.outerContainer}>
          <div>Profile Picture</div>
          <div style={styles.detailsBlock}>
            <OrganizationDetails/>
            <div>Skills Placeholder</div>
          </div>
        </div>
        <FlatButton>Follow Organization</FlatButton>
      </div>
    )
  }
}

const styles= {
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  detailsBlock: {
    display: 'flex',
    flexDirection: 'column'
  },

}

export default OrganizationBasicInfo