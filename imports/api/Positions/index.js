import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const PositionsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  positionType: {
    type: String,
  },
  opportunityType: {
    type: String,
  },
  timeCommitment: {
    type: String,
  },
  monetaryCommitment: {
    type: Number,
  },
  frequency: {
    type: String,
  },
  creator: {
    type: String,
  },
  skills: {
    type: [String],
  },
  applicants: {
    type: [String],
  },
  deadline: {
    type: Date
  },
})

const Positions = new Mongo.Collection('positions')
Positions.attachSchema(PositionsSchema)

export { Positions }
