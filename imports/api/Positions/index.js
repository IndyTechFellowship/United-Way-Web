import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo'

import InterestExpressionSchema from './InterestExpressionSchema';

const PositionsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  description: {
    type: String,
    optional: true
  },
  positionType: {
    type: String,
    optional: true
  },
  opportunityType: {
    type: String,
    optional: true
  },
  timeCommitment: {
    type: String,
    optional: true
  },
  monetaryCommitment: {
    type: Number,
    optional: true
  },
  frequency: {
    type: String,
    optional: true
  },
  creator: {
    type: String,
    optional: true
  },
  skills: {
    type: [ String ],
    optional: true
  },
  applicants: {
    type: [ InterestExpressionSchema ],
    optional: true,
  },
  deadline: {
    type: Date,
    optional: true
  },
})

const Positions = new Mongo.Collection('positions')
Positions.attachSchema(PositionsSchema)

Positions.after.insert(function(userId, doc) {
  if (Meteor.isServer) {
    const algolia = require('algoliasearch')
    const { applicationId, adminKey } = Meteor.settings.algolia
    const algoliaClient = algolia(applicationId, adminKey)
    const posIndex = algoliaClient.initIndex('positions')
    Meteor.wrapAsync(posIndex.addObjects, posIndex)([
      _(doc).assign({ objectID: doc._id }).omit([]).value()
    ])
  }
})

Positions.after.update(function(userId, doc) {
  if (Meteor.isServer) {
    const algolia = require('algoliasearch')
    const { applicationId, adminKey } = Meteor.settings.algolia
    const algoliaClient = algolia(applicationId, adminKey)
    const orgIndex = algoliaClient.initIndex('positions')
    Meteor.wrapAsync(posIndex.saveObjects, posIndex)([
      _(doc).assign({ objectID: doc._id }).omit([]).value()
    ])
  }
})

export { Positions }
