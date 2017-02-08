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

export default createContainer(() => {
  const query = {}
  const handle = Meteor.subscribe('Positions.get', query)
  if (!handle.ready()) {
    return { loading: true, positions: [] }
  } else {
    return { loading: false, positions: Positions.find({}).fetch() }
  }
}, PositionsListContainer)