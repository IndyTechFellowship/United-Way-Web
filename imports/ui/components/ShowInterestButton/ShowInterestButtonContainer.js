import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { Positions } from '/imports/api/Positions'

import ShowInterestButton from './ShowInterestButton'

class ShowInterestButtonContainer extends Component {

  render() {
    return <ShowInterestButton { ...this.props } />
  }

}

ShowInterestButtonContainer.propTypes = {

}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser })

export default connect(mapStateToProps)(createContainer(props => {
  const positionQuery = { _id: props.position._id}
  const positionSubscription = Meteor.subscribe('Positions.get', positionQuery)
  if (!positionSubscription.ready()) return { loading: true, position: {} }
  let position = Positions.findOne(positionQuery)

  const interestExpressed = !_.get(props, 'currentUser._id') ? false :
    Positions.find({
    _id: position._id,
    'applicants.userId': props.currentUser._id
  }).count() === 1

  return { loading: false, position: position, interestExpressed, currentUser: props.currentUser }
}, ShowInterestButtonContainer))