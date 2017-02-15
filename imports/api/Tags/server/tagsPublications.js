import { Meteor } from 'meteor/meteor'

import { Tags } from '/imports/api/Tags'

Meteor.publish('Tags.get', function (query) {
  return Tags.find(query)
})