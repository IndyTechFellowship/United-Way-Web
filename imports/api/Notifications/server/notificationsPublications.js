import { Meteor } from 'meteor/meteor'

import { Notifications } from '/imports/api/Notifications'

Meteor.publish('Notifications.get', function(query) {
  return Notifications.find(query)
})
