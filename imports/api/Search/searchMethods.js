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
  
  'Search.Reindex'() {
    if (Meteor.isDevelopment) {
      const orgIndex = algoliaClient.initIndex('organizations')
      Meteor.wrapAsync(orgIndex.deleteByQuery, orgIndex)('')
      const allOrgs = Organizations.find({}).fetch()
      Meteor.wrapAsync(orgIndex.addObjects, orgIndex)(
        _(allOrgs)
          .map(o => _(o)
            .assign({ objectID: o._id })
            .omit([])
            .value())
          .value()
      )
      const posIndex = algoliaClient.initIndex('positions')
      Meteor.wrapAsync(posIndex.deleteByQuery, posIndex)('')
      const allPos = Positions.find({}).fetch()
      Meteor.wrapAsync(posIndex.addObjects, posIndex)(
        _(allPos)
          .map(o => _(o)
            .assign({ objectID: o._id })
            .omit([])
            .value())
          .value()
      )
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
      console.log('reindex done')
    }
  },

  'Search.Organizations.FullText'(query, filters) {
    check(query, String);
    check(filters, Object);
    if (query.length < 3) return [];
    const orgIndex = algoliaClient.initIndex('organizations')
    return Meteor.wrapAsync(orgIndex.search, orgIndex)(query).hits;
  },

  'Search.Positions.FullText'(query, filters) {
    check(query, String);
    check(filters, Object);
    if (query.length < 3) return [];
    const positionsIndex = algoliaClient.initIndex('positionsIndex')
    return Meteor.wrapAsync(positionsIndex.search, positionsIndex)(query).hits;
  },

  'Search.Users.FullText'(query, filters) {
    check(query, String);
    check(filters, Object);
    if (query.length < 3) return [];
    const usersIndex = algoliaClient.initIndex('users');
    return Meteor.wrapAsync(usersIndex.search, usersIndex)(query).hits;
  },

});