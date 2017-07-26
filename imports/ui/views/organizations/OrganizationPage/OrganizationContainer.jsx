import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'

import { Organizations } from '/imports/api/Organizations'
import { Tags } from '/imports/api/Tags'
import OrganizationPage from './OrganizationPage'

const OrganizationContainer = createContainer((props) => {
  // get organization
  const query = {_id: props.params.id}
  const organizationHandle = Meteor.subscribe('Organizations.get', query)
  if (!organizationHandle.ready()) return { loading: true, organization: {} }
  let organization = Organizations.findOne(query)

  // get tags
  const tagsHandle = Meteor.subscribe('Tags.get', {})
  if (!tagsHandle.ready()) return { loading: true, organization: {} }

  // update organization with tag objects
  organization = Object.assign(organization, {
    tags: Tags.find({ _id: { $in: organization.tags } }).fetch()
  })

  // render
  return { loading: false, organization: organization, tags: Tags.find().fetch() }
}, OrganizationPage)

OrganizationContainer.propTypes = {
  id: PropTypes.number
}

export default OrganizationContainer
