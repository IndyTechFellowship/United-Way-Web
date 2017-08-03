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

  //determine if this organization is one the user admins
  let userId = Meteor.userId()
  const something = Meteor.subscribe('Organizations.thatUserAdmins', userId)
  if (!something.ready()) return { loading: true, organization: {}, isMyOrganization: false }
  let myOrg = Organizations.findOne({ admins: userId, _id: organization._id })
  let isThisMyOrganization = myOrg != undefined


  // render
  return { loading: false, organization: organization, tags: Tags.find().fetch(), isMyOrganization: isThisMyOrganization }
}, OrganizationPage)

OrganizationContainer.propTypes = {
  id: PropTypes.number
}

export default OrganizationContainer
