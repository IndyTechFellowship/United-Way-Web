import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Positions } from './index'

Meteor.methods({
  'Position.insert'(position) {
    if (this.connection) {
      position._id = null
      position.skills = position.skills.map(i => i._id)
      position.created = new Date()
      const newPosition = Positions.insert(position)
      if (!newPosition) throw Meteor.Error(401, 'unauthorized')
      return newPosition
    }
    throw Meteor.Error(401, 'unauthorized')
  },
  'Position.update'(position) {
    if (this.connection) {
      position.skills = position.skills.map(i => i._id)
      const newPosition = Positions.update(position._id, { $set: position })
      if (!newPosition) throw Meteor.Error(401, 'unauthorized')
      return newPosition
    }
    throw Meteor.Error(401, 'unauthorized')
  },
  'Position.delete'(id) {
    if (this.connection) {
      const result = Positions.remove(id)
      if (!result) throw Meteor.Error(401, 'unauthorized')
      return result
    }
    throw Meteor.Error(401, 'unauthorized')
  }
})