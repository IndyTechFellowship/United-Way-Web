import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Users } from '/imports/api/Users'

class InterestedPositionItem extends Component {
  render() {
    let { note, user } = this.props
    return (
      <div>
        <div>{note}</div>
      </div>
    )
  }
}

const InterestedPositionItemContainer = createContainer((props) => {
  const query = {_id: props.userId}
  const usersHandle = Meteor.subscribe('Users.get', query)
  if (!usersHandle.ready()) return { user: {} }
  let user = Users.findOne(query)
  return { user: user }
}, InterestedPositionItem)

export default InterestedPositionItemContainer