import { isObject, map, omit } from 'lodash'
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Users } from '/imports/api/Users'
import { Organizations } from './index'

Meteor.methods({
  
  'Organizations.create'({ organization }) {
    const callingUser = Users.findOne({ _id: this.userId })
    if (!callingUser) {
      throw new Meteor.Error(401, 'unauthorized');
    }
    Organizations.insert({
      admins: [ callingUser._id ],
      avatarUrl: `${Meteor.absoluteUrl()}ic_business_black_48dp_1x.png`,
      city: organization.city,
      description: organization.description,
      imageUrls: [],
      name: organization.name,
      positions: [],
      state: organization.state,
      tagline: 'My Great Organization',
      tags: [],
      users: [ callingUser._id ],
      websiteUrl: 'https://boardserveindy.org/',
    });
  },

  'Organization.update'(organization) {
    const callingUser = Users.findOne({ _id: this.userId });
    if (!callingUser) {
      throw new Meteor.Error(401, 'unauthorized')
    }
    if (organization.tags) {
      organization.tags = map(organization.tags, t => {
        if (isObject(t)) return t._id
        else return t
      })
    }
    if (organization.positions) {
      organization.positions = map(organization.positions, t => {
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

  'Organization.addAdmin'(id) {
    Organizations.update({
      _id: id,
    }, {
      $push: {
        admins: this.userId,
      },
    });
  },

})