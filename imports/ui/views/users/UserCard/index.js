import React, { Component } from 'react'

import CardComponent from '/imports/ui/components/CardComponent'

class UserCard extends Component {
  render() {
    const user = this.props.user
    let body = {
      leftColumn: {
        label: 'About',
        content: user.summary
      },
      rightColumn: {
        label: 'Skills',
        content: 'Skills TODO'
      }
    }
    return (
      <CardComponent
        key={user._id}
        imageUrl={user.avatar.original}
        name={`${user.firstName} ${user.lastName}`}
        title={user.tagline}
        subtitle={user.companyName}
        buttonLabel="Follow"
        body={body}
        cardType="user"
      />
    )
  }
}

export default UserCard
