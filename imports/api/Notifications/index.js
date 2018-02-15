import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const NotificationsSchema = new SimpleSchema({
  title: {
    type: String,
  },
  icon: {
    type: String,
  },
  description: {
    type: String,
  },
  path: {
    type: String,
  },
  viewed: {
    type: Boolean
  },
  at: {
    type: Date
  }
})

const Notifications = new Mongo.Collection('notifications')
Notifications.attachSchema(NotificationsSchema)

export { Notifications }