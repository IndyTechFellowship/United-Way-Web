import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'

import { Tags } from '/imports/api/Tags'
import UserCard from './UserCard'

class UserCardContainer extends Component {

  render() {
    return <UserCard { ...this.props }/>
  }
}

UserCardContainer.propTypes = {

}

export default createContainer((props) => {
  let user = props.user
  const tagQuery = {_id: {$in: user.skills}}
  const tagSubscription = Meteor.subscribe('Tags.get', tagQuery)

  if (!tagSubscription.ready()) return { loading: true, user: {} }
  user = Object.assign(user, {
    skills: Tags.find(tagQuery).fetch()
  })
  return { loading: false, user: user }
}, UserCardContainer)