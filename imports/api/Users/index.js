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
    optional: true,
  },
  lastName: {
    type: String,
    optional: true,
  },
  tagline: {
    type: String,
    optional: true,
  },
  summary: {
    type: String,
    optional: true,
  },
  interests: {
    type: [ String ],
    optional: true,
  },
  skills: {
    type: [ String ],
    optional: true,
  },
  professionalExperiences: {
    type: [ String ],
    optional: true,
  },
  volunteerExperiences: {
    type: [ String ],
    optional: true,
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

const EmailAddressSchema = new SimpleSchema({
  address: { type: String },
  verified: { type: Boolean, optional: true },
})

const UserSchema = new SimpleSchema({
  services: {
    type: Object,
    blackbox: true,
    optional: true
  },
  emails : {
    type: [EmailAddressSchema],
    optional: true,
  },
  registered_emails: {
    type: [EmailAddressSchema],
    optional: true,
  },
  profile: {
    type: ProfileSchema,
    optional: true,
  },
  roles: {
    type: [ RolesSchema ],
    optional: true,
  },
  savedPositions: {
    type: [ String ],
    optional: true,
  },
})

const Users = Meteor.users;
Users.attachSchema(UserSchema)

export { Users }
