import _ from 'lodash'
import { check } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Organizations } from '/imports/api/Organizations'
import { Positions } from '/imports/api/Positions'
import { Users } from '/imports/api/Users'

Meteor.methods({
  
  'Search.fullText.all'(query) {
    check(query, String)
    const mQuery = { $text: { $language: 'en', $search: query } }
    const opts = {
      fields: {
          score: { $meta: "textScore" }
      },
      sort: {
        score: { $meta: "textScore" }
      },
      limit: 5,
    }
    const orgResults = Organizations.find(mQuery, opts).map(o => _.assign(o, { type: 'Organizations' }))
    const posResults = Positions.find(mQuery, opts).map(o => _.assign(o, { type: 'Positions' }))
    const uResults = Users.find(mQuery, opts).map(o => _.assign(o, { type: 'Users' }))
    return _.sortBy([ ...orgResults, ...posResults, ...uResults ], 'score')
  },

})