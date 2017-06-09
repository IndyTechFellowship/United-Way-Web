import algolia from 'algoliasearch'
import _ from 'lodash'
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Organizations } from '/imports/api/Organizations'
import { Positions } from '/imports/api/Positions'
import { Users } from '/imports/api/Users'

if (!Meteor.settings.algolia) throw "Must provide algolia object in settings"
const { applicationId, adminKey } = Meteor.settings.algolia

const algoliaClient = algolia(applicationId, adminKey)

Meteor.methods({
  
  'Search.reindex'() {
    if (Meteor.isDevelopment) {
      const usersIndex = algoliaClient.initIndex('users')
      Meteor.wrapAsync(usersIndex.deleteByQuery, usersIndex)('')
      const allUsers = Users.find({}).fetch()
      Meteor.wrapAsync(usersIndex.addObjects, usersIndex)(
        _(allUsers)
          .map(u => _(u)
            .assign({ objectID: u._id })
            .omit([ 'services' ])
            .value())
          .value()
      )
    }
  },

  'Search.Users.FullText'(query, filters) {
    check(query, String);
    check(filters, Object);
    if (query.length < 3) return [];
    const usersIndex = algoliaClient.initIndex('users');
    return Meteor.wrapAsync(usersIndex.search, usersIndex)(query).hits;
  },

});