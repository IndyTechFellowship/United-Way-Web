import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import { Users } from '/imports/api/Users'

import UserCarousel from './UserCarousel'

class UserCarouselContainer extends Component {

  render() {
    return <UserCarousel { ...this.props }/>
  }
}

UserCarouselContainer.propTypes = {

}

export default createContainer(() => {
  let userQuery = {}
  const userSubscription = Meteor.subscribe('Users.get', userQuery)
  if (!userSubscription.ready()) {
    return { loading: true, users: [] }
  } else {
    // NOTE: shuffle array of users and then select 5 users (or however many are available if less than 5)
    let users =  _.take(_.shuffle(Users.find(userQuery).fetch()), 5);
    return { loading: false, users: users }
  }
}, UserCarouselContainer)
