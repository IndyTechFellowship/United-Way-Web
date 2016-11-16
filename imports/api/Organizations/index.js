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
  description: {
    type: String,
  },
  users: {
    type: [String], 
  },
  positions: {
    type: [String],
  },
  admins: {
    type: [String],
  },
})

const Organizations = new Mongo.Collection('organizations')
Organizations.attachSchema(OrganizationSchema)

export { Organizations }