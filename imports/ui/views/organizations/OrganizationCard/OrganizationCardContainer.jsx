import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import { Organizations } from '/imports/api/Organizations'
import { Tags } from '/imports/api/Tags'
import OrganizationCard from './OrganizationCard'

class OrganizationCardContainer extends Component {

  render() {
    return <OrganizationCard { ...this.props }/>
  }
}

OrganizationCardContainer.propTypes = {

}

export default createContainer((props) => {
  const orgQuery = { _id: props.organization._id }
  const orgSubscription = Meteor.subscribe('Organizations.get', orgQuery)
  if (!orgSubscription.ready()) return { loading: true, organization: {} }
  let organization = Organizations.findOne(orgQuery)

  const tagQuery = {_id: {$in: organization.tags}}
  const tagSubscription = Meteor.subscribe('Tags.get', tagQuery)

  if (!tagSubscription.ready()) return { loading: true, organization: {} }
  organization = Object.assign(organization, {
    tags: Tags.find(tagQuery).fetch()
  })
  return { loading: false, organization: organization }


}, OrganizationCardContainer)