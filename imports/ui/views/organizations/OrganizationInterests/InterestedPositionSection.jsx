import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Positions } from '/imports/api/Positions'
import InterestedPositionItem from './InterestedPositionItem'
import Loading from '/imports/ui/components/Loading'

class InterestedPositionSection extends Component {
  render() {
    let { loading, position } = this.props
    let { name, applicants } = position
    if (loading) {
      return (
        <Loading />
      )
    }

    let items = applicants === undefined ? <div></div> : applicants.map((person) => {
      return (
        <InterestedPositionItem key={person.userId} userId={person.userId} note={person.note} />
      )
    })

    return (
      <div>
        <div style={{margin: 10}}>{name}</div>
        {items}
      </div>
    )
  }
}

const InterestedPositionCardContainer = createContainer((props) => {
  const query = {_id: props.position._id}
  const positionHandle = Meteor.subscribe('Positions.get', query)
  if (!positionHandle.ready()) return { loading: true, position: {} }
  let position = Positions.findOne(query)
  return { loading: false, position: position }
}, InterestedPositionSection)

export default InterestedPositionCardContainer