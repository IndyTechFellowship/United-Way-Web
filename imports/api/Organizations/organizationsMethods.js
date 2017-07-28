import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Organizations } from './index'

Meteor.methods({
  'Organization.update'(organization) {
    if (this.connection) {
      organization.tags = organization.tags.map(i => i._id)
      const newOrganization = Organizations.update(organization._id, { $set: organization })
      if (!newOrganization) throw Meteor.Error(401, 'unauthorized')
      return newOrganization
    }
    throw Meteor.Error(401, 'unauthorized')
  }
})