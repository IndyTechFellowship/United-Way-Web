import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const FollowsSchema = new SimpleSchema({
  user: {
    type: String,
  },
  organization: {
    type: String,
  },
})

const Follows = new Mongo.Collection('follows')
Follows.attachSchema(FollowsSchema)

export { Skills }
