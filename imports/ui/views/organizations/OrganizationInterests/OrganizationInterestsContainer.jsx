import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'


import { Positions } from '/imports/api/Positions'
import OrganizationInterests from './OrganizationInterests'

const OrganizationsInterestsContainer = createContainer((props) => {
  return {}
}, OrganizationInterests)

export default OrganizationsInterestsContainer