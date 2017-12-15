import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import Loader from '/imports/new-ui/components/Loader'
import { Tags } from '/imports/api/Tags'
import { Positions } from '/imports/api/Positions'
import { Organizations } from '/imports/api/Organizations'
import Position from '/imports/new-ui/components/Positions/Position'

class PositionCarousel extends Component {

  render() {
    const { loading, positions } = this.props
    if (loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div style={styles.container}>
          {
            positions.map(position => <Position key={position._id} position={position} />)
          }
        </div>
      )
    }
  }
}

PositionCarousel.propTypes = {

}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  }
}

export default createContainer(() => {
  // get tags and experiences
  const subs = [
    Meteor.subscribe('Positions.get', {}),
    Meteor.subscribe('Tags.get', {}),
    Meteor.subscribe('Organizations.get', {})
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, positions: [] }

  let positions = _.take(_.shuffle(Positions.find().fetch()), 4)
  if (positions.length % 2 != 0) {
    positions = _.dropRight(positions)
  }
  positions.map(position => (
    Object.assign(position,
      {
        skills: Tags.find({ _id: { $in: position.skills || [] } }).fetch(),
        organization: Organizations.find({ positions: position._id }).fetch()[0]
      }
    )
  ))

  return { loading: false, positions: positions }
}, PositionCarousel)