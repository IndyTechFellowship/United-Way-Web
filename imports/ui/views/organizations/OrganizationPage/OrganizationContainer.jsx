import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'

import { Organizations } from '/imports/api/Organizations'
import OrganizationPage from './OrganizationPage'

export default createContainer((props) => {
  const query = {_id: props.params.id}
  const handle = Meteor.subscribe('Organizations.get', query)
  if (!handle.ready()) return { loading: true, organization: {} }
  else return { loading: false, organization: Organizations.findOne(query) }
}, OrganizationPage)
