import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

const TagsSchema = new SimpleSchema({
  name: {
    type: String,
  },
})

const Tags = new Mongo.Collection('tags')
Tags.attachSchema(TagsSchema)

export { Tags }
