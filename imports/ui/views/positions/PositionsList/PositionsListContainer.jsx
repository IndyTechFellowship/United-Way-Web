import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'

import { Positions } from '/imports/api/Positions'
import PositionsList from './PositionsList'

class PositionsListContainer extends Component {

  render() {
    return <PositionsList { ...this.props } />
  }
}

PositionsListContainer.propTypes = {

}

export default createContainer((props) => {
  const positionSubscription = Meteor.subscribe('Positions.get', props.query)
  if (!positionSubscription.ready()) {
    return { loading: true, positions: [], organization: {} }
  } else {
    return { loading: false, positions: Positions.find(props.query).fetch(), organization:
        !props.organization ? {} : props.organization }
  }
}, PositionsListContainer)