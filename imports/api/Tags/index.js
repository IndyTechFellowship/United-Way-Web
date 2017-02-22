import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const TagsSchema = new SimpleSchema({
  name: {
    type: String,
  },
})

const Tags = new Mongo.Collection('tags')
Tags.attachSchema(TagsSchema)

export { Tags }
