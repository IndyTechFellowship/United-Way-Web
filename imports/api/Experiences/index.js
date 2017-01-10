import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const ExperiencesSchema = new SimpleSchema({
  logoUrl: {
    type: String,
  },
  title: {
    type: String,
  }.
  companyName: {
    type: String,
  },
  organization: {
    type: String,
  },
  location: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
})

const Experiences = new Mongo.Collection('experiences')
Experiences.attachSchema(ExperiencesSchema)

export { Experiences }
