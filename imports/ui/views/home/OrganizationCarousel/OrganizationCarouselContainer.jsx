import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import { Organizations } from '/imports/api/Organizations'

import OrganizationCarousel from './OrganizationCarousel'

class OrganizationCarouselContainer extends Component {

  render() {
    return <OrganizationCarousel { ...this.props }/>
  }
}

OrganizationCarouselContainer.propTypes = {

}

export default createContainer(() => {
  let organizationQuery = {}
  const organizationSubscription = Meteor.subscribe('Organizations.get', organizationQuery)
  if (!organizationSubscription.ready()) {
    return { loading: true, organizations: [] }
  } else {
    // NOTE: shuffle array of organizations and then select 5 organizations (or however many are available if less than 5)
    let organizations =  _.take(_.shuffle(Organizations.find(organizationQuery).fetch()), 5);
    return { loading: false, organizations: organizations }
  }
}, OrganizationCarouselContainer)
