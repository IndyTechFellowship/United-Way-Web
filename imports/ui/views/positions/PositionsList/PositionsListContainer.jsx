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
  const handle = Meteor.subscribe('Positions.get', props.query)
  if (!handle.ready()) {
    return { loading: true, positions: [] }
  } else {
    return { loading: false, positions: Positions.find(props.query).fetch() }
  }
}, PositionsListContainer)