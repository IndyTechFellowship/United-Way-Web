import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import { Positions } from '/imports/api/Positions'
import { Organizations } from '/imports/api/Organizations'
import { Tags } from '/imports/api/Tags'
import Position from './Position'

class PositionContainer extends Component {

  render() {
    return <Position { ...this.props } />
  }

}

PositionContainer.propTypes = {

}

export default createContainer((props) => {
  const positionQuery = { _id: props.position._id}
  const positionSubscription = Meteor.subscribe('Positions.get', positionQuery)
  if (!positionSubscription.ready()) return { loading: true, position: {}, organization: {} }
  let position = Positions.findOne(positionQuery)

  const orgQuery = { positions: props.position._id }
  const tagQuery = {_id: {$in: position.skills}}
  const subs = [
    Meteor.subscribe('Organizations.get', orgQuery),
    Meteor.subscribe('Tags.get', tagQuery)
  ]

  if (_.some(subs, (s) => !s.ready())) return { loading: true, position: {}, organization: {} }
  let organization = !_.get(props, 'organization._id') ? Organizations.find(orgQuery).fetch()[0] : props.organization
  position = Object.assign(position, {
    skills: Tags.find(tagQuery).fetch()
  })
  return { loading: false, position: position, organization: organization }

}, PositionContainer)
