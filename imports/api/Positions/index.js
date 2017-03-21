import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo'

import InterestExpressionSchema from './InterestExpressionSchema';

const PositionsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  description: {
    type: String,
    optional: true
  },
  positionType: {
    type: String,
    optional: true
  },
  opportunityType: {
    type: String,
    optional: true
  },
  timeCommitment: {
    type: String,
    optional: true
  },
  monetaryCommitment: {
    type: Number,
    optional: true
  },
  frequency: {
    type: String,
    optional: true
  },
  creator: {
    type: String,
    optional: true
  },
  skills: {
    type: [ String ],
    optional: true
  },
  applicants: {
    type: [ InterestExpressionSchema ],
    optional: true,
  },
  deadline: {
    type: Date,
    optional: true
  },
})

const Positions = new Mongo.Collection('positions')
Positions.attachSchema(PositionsSchema)

export { Positions }
