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
  tagline: {
    type: String,
  },
  summary: {
    type: String,
  },
  interests: {
    type: [ String ],
  },
  skills: {
    type: [ String ],
  },
  professionalExperience: {
    type: [ String ],
  },
  volunteerExperience: {
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
  savedPositions: {
    type: [ String ],
  },
})

const Users = new Mongo.Collection('users')
Users.attachSchema(UserSchema)

export { Users }
