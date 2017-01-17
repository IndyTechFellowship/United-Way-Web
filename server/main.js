import { Meteor } from 'meteor/meteor'

import '/imports/startup/server'

if (Meteor.isDevelopment) {
  Seed = require('../imports/seeds').default;
}
