import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo'
import _ from 'lodash'

const OrganizationSchema = new SimpleSchema({
  admins: {
    type: [String],
  },
  avatarUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  tagline: {
    type: String,
  },
  imageUrls: {
    type: [ String ],
  },
  websiteUrl: {
    type: String,
    optional: true,
  },
  description: {
    type: String,
  },
  users: {
    type: [ String ],
  },
  tags: {
    type: [ String ],
  },
  positions: {
    type: [ String ],
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  }
})

const Organizations = new Mongo.Collection('organizations')
Organizations.attachSchema(OrganizationSchema)

Organizations.after.insert(function(userId, doc) {
  if (Meteor.isServer) {
    const algolia = require('algoliasearch')
    const { applicationId, adminKey } = Meteor.settings.algolia
    const algoliaClient = algolia(applicationId, adminKey)
    const orgIndex = algoliaClient.initIndex('organizations')
    Meteor.wrapAsync(orgIndex.addObjects, orgIndex)([
      _(doc).assign({ objectID: doc._id }).omit([]).value()
    ])
  }
})

Organizations.after.update(function(userId, doc) {
  if (Meteor.isServer) {
    const algolia = require('algoliasearch')
    const { applicationId, adminKey } = Meteor.settings.algolia
    const algoliaClient = algolia(applicationId, adminKey)
    const orgIndex = algoliaClient.initIndex('organizations')
    Meteor.wrapAsync(orgIndex.saveObjects, orgIndex)([
      _(doc).assign({ objectID: doc._id }).omit([]).value()
    ])
  }
})

export { Organizations }
