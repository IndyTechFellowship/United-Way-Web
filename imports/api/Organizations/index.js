import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Mongo } from 'meteor/mongo'

import { Positions } from '/imports/api/Positions'

const OrganizationSchema = new SimpleSchema({
  avatarUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  tagline: {
    type: String,
  },
  imageUrls: {
    type: [ String ],
  },
  description: {
    type: String,
  },
  users: {
    type: [ String ],
  },
  tags: {
    type: [ String ],
  },
  positions: {
    type: [ String ],
  },
})

const Organizations = new Mongo.Collection('organizations')
Organizations.attachSchema(OrganizationSchema)

Organizations.helpers({

  getPositions() {
    console.log('asdf')
    console.log(this.positions)
    return Positions.find({ _id: { $in: this.positions }}).fetch()
  },

})

export { Organizations }
