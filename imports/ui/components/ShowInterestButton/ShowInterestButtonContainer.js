import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'

import { Positions } from '/imports/api/Positions'

import ShowInterestButton from './ShowInterestButton'

class ShowInterestButtonContainer extends Component {

  render() {
    return <ShowInterestButton { ...this.props } />
  }

}

ShowInterestButtonContainer.propTypes = {

}

export default createContainer((props) => {
  console.log('in the container');
  const positionQuery = { _id: props.position._id}
  const positionSubscription = Meteor.subscribe('Positions.get', positionQuery)
  if (!positionSubscription.ready()) return { loading: true, position: {} }
  let position = Positions.findOne(positionQuery)

  return { loading: false, position: position }

}, ShowInterestButtonContainer)