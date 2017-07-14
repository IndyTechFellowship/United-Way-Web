import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'

import { Users } from './index'

Meteor.methods({
  'User.update'(user) {
    if (this.connection) {
      user.profile.interests = user.profile.interests.map(i => i._id)
      user.profile.skills = user.profile.skills.map(i => i._id)
      user.profile.professionalExperiences = user.profile.professionalExperiences.map(i => i._id)
      user.profile.volunteerExperiences = user.profile.volunteerExperiences.map(i => i._id)
      const newUser = Users.update(user._id, { $set: { profile: user.profile }})
      if (!newUser) throw Meteor.Error(401, 'unauthorized')
      return newUser
    }
    throw Meteor.Error(401, 'unauthorized')
  }
})