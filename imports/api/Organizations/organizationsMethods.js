import { isObject, map, omit } from 'lodash'
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Users } from '/imports/api/Users'
import { Organizations } from './index'

Meteor.methods({
  
  'Organization.update'(organization) {
    const callingUser = Users.findOne({ _id: this.userId });
    if (!callingUser) {
      throw Meteor.Error(401, 'unauthorized')
    }
    if (organization.tags) {
      organization.tags = map(organization.tags, t => {
        if (isObject(t)) return t._id
        else return t
      })
    }
    Organizations.update({
      _id: organization._id,
    }, {
      $set: omit(organization, [ '_id' ]),
    })
    return true
  },

})