import _ from 'lodash';
import { check, Match } from 'meteor/check'
import { Meteor } from 'meteor/meteor'
import { Promise } from 'meteor/promise'
import BitlyClient from 'bitly'

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
  },
  'Users.setProfilePicture'(url) {
    Users.update({
      _id: this.userId,
    }, {
      $set: {
        'profile.avatar.original': url,
      }
    });
  },
  'User.generateInviteLink'(link) {
    const fullLink = `${link}&token=${Meteor.settings.signupToken}` 
    const bitly = BitlyClient(Meteor.settings.bitly.token)
    return bitly.shorten(fullLink)
  },
  'User.addBookmark'(positionId) {
    Users.update({
      _id: this.userId,
    }, {
      $push: {
        'profile.bookmarks': positionId,
      },
    });
  },
  'User.removeBookmark'(positionId) {
    Users.update({
      _id: this.userId,
    }, {
      $pull: {
        'profile.bookmarks': positionId,
      },
    });
  },
})