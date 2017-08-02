import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Experiences } from './index'

Meteor.methods({
  'Experience.insert'(experience) {
    if (this.connection) {
      experience._id = null
      experience.tags = experience.tags.map(i => i._id)
      const newExperience = Experiences.insert(experience)
      console.log(newExperience)
      if (!newExperience) throw Meteor.Error(401, 'unauthorized')
      return newExperience
    }
    throw Meteor.Error(401, 'unauthorized')
  },
  'Experience.update'(experience) {
    if (this.connection) {
      experience.tags = experience.tags.map(i => i._id)
      const newExperience = Experiences.update(experience._id, { $set: experience })
      if (!newExperience) throw Meteor.Error(401, 'unauthorized')
      return newExperience
    }
    throw Meteor.Error(401, 'unauthorized')
  },
  'Experience.delete'(id) {
    if (this.connection) {
      const result = Experiences.remove(id)
      if (!result) throw Meteor.Error(401, 'unauthorized')
      return result
    }
    throw Meteor.Error(401, 'unauthorized')
  }
})