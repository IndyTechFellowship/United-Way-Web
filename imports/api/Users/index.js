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
  skills: {
    type: [ String ],
  },
})

const RolesSchema = new SimpleSchema({
  organizationId: {
    type: String,
  },
  role: {
    type: String,
    allowedValues: [ "member", "admin" ],
  }
})

const UserSchema = new SimpleSchema({
  services: {
    type: Object,
    blackbox: true,
    optional: true
  },
  profile: {
    type: ProfileSchema,
  },
  roles: {
    type: [ RolesSchema ],
  },
})

const Users = new Mongo.Collection('users')
Users.attachSchema(UserSchema)

export { Users }

