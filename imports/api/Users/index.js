import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const ProfileAvatarSchema = new SimpleSchema({
  original: { type: String },
  x250: { type: String, optional: true },
})

const ProfileSchema = new SimpleSchema({
  avatar: {
    type: ProfileAvatarSchema,
    optional: true
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

