import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo'

const OrganizationSchema = new SimpleSchema({
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
})

const Organizations = new Mongo.Collection('organizations')
Organizations.attachSchema(OrganizationSchema)

export { Organizations }
