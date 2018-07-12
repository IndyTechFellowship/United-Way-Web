import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'

import { Organizations } from '/imports/api/Organizations'
import { Positions } from '/imports/api/Positions'
import { Tags } from '/imports/api/Tags'
import OrganizationPage from './OrganizationPage'

const OrganizationPageContainer = createContainer((props) => {
  // get organization
  const query = {_id: props.params.id}
  const organizationHandle = Meteor.subscribe('Organizations.get', query)
  if (!organizationHandle.ready()) return { loading: true, organization: {} }
  let organization = Organizations.findOne(query)

  // get tags and positions
  const subs = [
    Meteor.subscribe('Tags.get', {}),
    Meteor.subscribe('Positions.get', { _id: { $in: (organization.positions || []) } })
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, organization: {} }


  // update organization with tag objects
  organization = Object.assign(organization, {
    positions: Positions.find({ _id: { $in: organization.positions || [] } }, { sort: { created: -1 }}).fetch().map(position => (
      Object.assign(position, {
        skills: Tags.find({ _id: { $in: position.skills } }).fetch(),
        organization: organization
      })
    )),
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

OrganizationPageContainer.propTypes = {
  id: PropTypes.number
}

export default OrganizationPageContainer