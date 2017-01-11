import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const ApplicationsSchema = new SimpleSchema({
  text: {
    type: String,
  },
  user: {
    type: String,
  },
  position: {
    type: String,
  },
})

const Applications = new Mongo.Collection('applications')
Applications.attachSchema(ApplicationsSchema)

export { Applications }
