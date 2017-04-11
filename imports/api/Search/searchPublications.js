import _ from 'lodash'
import { check } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Organizations } from '/imports/api/Organizations'

Meteor.publish('Search.fullText.all', function(query) {
  check(query, String)
  const mQuery = { $text: { $search: query } }
  const opts = {
    fields: {
        score: { $meta: "textScore" }
    },
    sort: {
      score: { $meta: "textScore" }
    },
    limit: 5,
  }
  Organizations.find(mQuery, opts)
    .forEach(org => this.added('SearchResults', org._id, _.assign(org, {
      _type: 'Organizations',
    })))
  Positions.find(mQuery, opts)
    .forEach(pos => this.added('SearchResults', pos._id, _.assign(pos, {
      _type: 'Positions',
    })))
  Users.find(mQuery, opts)
    .forEach(u => this.added('SearchResults', u._id, _.assign(u, {
      _type: 'Users',
    })))
  this.ready()
})