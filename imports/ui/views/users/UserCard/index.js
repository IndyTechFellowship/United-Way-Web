import React, { Component } from 'react'

import CardComponent from '/imports/ui/components/CardComponent'

class UserCard extends Component {
  render() {
    const user = this.props.user
    return (
      <CardComponent
        key={user._id}
        imageUrl={user.avatar ? user.avatar.original : null}
        supertitle="Education"
        title={`${user.firstName} ${user.lastName}`}
        subtitle={user.tagline}
        buttonLabel="Follow"
        body={user.summary}
      />
    )
  }
}

export default UserCard
