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
        {positions.map((position) => {
          return (
            <InterestedPositionSection key={position} position={position} />
          )
        })}
      </div>
    )
  }
}
