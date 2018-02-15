import { check, Match } from 'meteor/check';
import { Meteor } from 'meteor/meteor';

import { Notifications } from '/imports/api/Notifications'

Meteor.methods({

  'Notifications.view'(notifications = []) {
    console.log(notifications)
    Notifications.update(
      { _id: { $in: notifications.map(notification => notification._id) } },
      { $set: { viewed: true } },
      { multi: true }
    )
  },
});