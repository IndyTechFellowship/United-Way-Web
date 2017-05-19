import algolia from 'algoliasearch'
import _ from 'lodash'
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Organizations } from '/imports/api/Organizations'
import { Positions } from '/imports/api/Positions'
import { Users } from '/imports/api/Users'

if (!Meteor.settings.algolia) throw "Must provide algolia object in settings to start"
const { applicationId, adminKey } = Meteor.settings.algolia

const algoliaClient = algolia(applicationId, adminKey)

Meteor.methods({
  
  'Search.reindex'() {
    const usersIndex = algoliaClient.initIndex('users')
    Meteor.wrapAsync(usersIndex.deleteByQuery, usersIndex)('something')
    const allUsers = Users.find({}, { fields: {
      _id: 1,
      emails: 1,
      profile: 1,
    }}).fetch()
    Meteor.wrapAsync(usersIndex.addObjects, usersIndex)(allUsers)
  },

  'Search.fullText.all'(query, filters) {
    check(query, String)
    check(filters, Object)
    check(filters.users, Boolean)
    if (query.length < 3) return []
    const usersIndex = algoliaClient.initIndex('users')
    const usersResults = (() => {
      if (!filters.users) return []
      else return _.map(Meteor.wrapAsync(usersIndex.search, usersIndex)(query).hits, h => _.assign(h, {
        _type: 'Users'
      }))
    })()
    return [...usersResults];
  },

})