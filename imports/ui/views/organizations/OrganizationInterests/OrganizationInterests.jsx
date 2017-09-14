import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import Breadcrumbs from '/imports/ui/components/Breadcrumbs'
import { createContainer } from 'meteor/react-meteor-data'
import InterestedPositionSection from './InterestedPositionSection'

export default class OrganizationInterests extends Component {
  render() {
    let { name, positions } = this.props.organization 
    let breadcrumbName = 'Volunteers Interested in ' + name + ' Positions'
    return (
      <div>
        <Breadcrumbs crumbs={[
          {text: 'Organizations', path: '/organizations'},
          {text: breadcrumbName, path: null}
        ]} />
        {positions.length > 0 ?
          positions.map((position) => {
            return (
              <InterestedPositionSection key={position} position={position} />
            )
          })
        :
          <div style={styles.empty}>No Positions Added<br/>Add positions from the Profile tab</div>
        }
      </div>
    )
  }
}

const styles = {
  empty: {
    fontSize: '24px',
    color: '#9b9b9b',
    width: '100%',
    padding: '48px 0',
    textAlign: 'center'
  }
}