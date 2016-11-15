import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const ProfileSchema = new SimpleSchema({
  avatarUrl: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  description: {
    type: String,
  },
})

const UserSchema = new SimpleSchema({
  profile: {
    type: ProfileSchema,
  },
})

const Users = new Mongo.Collection('users')
Users.attachSchema(UserSchema)

export { Users }

