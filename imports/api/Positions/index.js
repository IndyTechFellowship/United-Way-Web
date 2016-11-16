import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const PositionsSchema = new SimpleSchema({
  name: {
    type: String,
  },
  description: {
    type: String,
  }.
  creator: {
    type: String,
  },
  requiredSkills: {
    type: [String],
  },
  desiredSkills: {
    type: [String],
  },
  applicants: {
    type: [String],
  },
})

const Positions = new Mongo.Collection('positions')
Positions.attachSchema(PositionsSchema)

export { Positions }