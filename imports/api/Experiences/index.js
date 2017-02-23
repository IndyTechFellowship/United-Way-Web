import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const ExperiencesSchema = new SimpleSchema({
  logoUrl: {
    type: String,
    optional: true
  },
  title: {
    type: String,
  },
  companyName: {
    type: String,
    optional: true
  },
  description: {
    type: String,
    optional: true
  },
  organizationId: {
    type: String,
    optional: true
  },
  location: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
    optional: true
  },
})

const Experiences = new Mongo.Collection('experiences')
Experiences.attachSchema(ExperiencesSchema)

export { Experiences }
