import { Meteor } from 'meteor/meteor'

import SeedTags from './seedTags'
import SeedOrganizations from './seedOrganizations'
import SeedPositions from './seedPositions'
import SeedUsers from './seedUsers'

Meteor.methods({

  'Seed'() {
    if (Meteor.isDevelopment) {
      SeedPositions()
      SeedOrganizations()
      SeedUsers()
      console.log('done!')
    }
    SeedTags()
  }

})