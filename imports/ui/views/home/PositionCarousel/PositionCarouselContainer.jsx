import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import { Positions } from '/imports/api/Positions'

import PositionCarousel from './PositionCarousel'

class PositionCarouselContainer extends Component {

  render() {
    return <PositionCarousel { ...this.props }/>
  }
}

PositionCarouselContainer.propTypes = {

}

export default createContainer(() => {
  let positionQuery = {}
  const positionSubscription = Meteor.subscribe('Positions.get', positionQuery)
  if (!positionSubscription.ready()) {
    return { loading: true, positions: [] }
  } else {
    // NOTE: shuffle array of positions and then select 5 positions (or however many are available if less than 5)
    let positions =  _.take(_.shuffle(Positions.find(positionQuery).fetch()), 5);
    return { loading: false, positions: positions }
  }
}, PositionCarouselContainer)