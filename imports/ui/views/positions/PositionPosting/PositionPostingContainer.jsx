import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'

import { Positions } from '/imports/api/Positions'
import { Tags } from '/imports/api/Tags'
import PositionPosting from './PositionPosting'

class PositionPostingContainer extends Component {

  render() {
    return <PositionPosting { ...this.props } />
  }

}

PositionPostingContainer.propTypes = {

}

export default createContainer((props) => {
  const positionQuery = { _id: props.position._id}
  const positionSubscription = Meteor.subscribe('Positions.get', positionQuery)
  if (!positionSubscription.ready()) return { loading: true, position: {} }
  let position = Positions.findOne(positionQuery)

  const tagQuery = {_id: {$in: position.skills}}
  const tagSubscription = Meteor.subscribe('Tags.get', tagQuery)
  if (!tagSubscription.ready()) return { loading: true, position: {} }
  position = Object.assign(position, {
    skills: Tags.find(tagQuery).fetch()
  })
  return { loading: false, position: position }

}, PositionPostingContainer)

