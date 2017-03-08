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
    // NOTE: shuffle positions array and then take select 10 positions or whatever number of positions are available
    let positions =  _.take(_.shuffle(Positions.find(positionQuery).fetch()), 10);
    return { loading: false, positions: positions }
  }
}, PositionCarouselContainer)