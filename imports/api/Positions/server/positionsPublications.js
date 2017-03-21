import { Meteor } from 'meteor/meteor'

import { Positions } from '/imports/api/Positions'

Meteor.publish('Positions.get', function(query) {
  return Positions.find(query)
})
