import React, { Component } from 'react'

import CardComponent from '/imports/ui/components/CardComponent'

class OrganizationCard extends Component {
  render() {
    const organization = this.props.organization
    let body = {
      leftColumn: {
        label: 'Other Website URL',
        content: organization.websiteUrl
      },
      rightColumn: {
        label: 'Search Tags',
        content: 'org tags TODO'
      }
    }

    return (
      <CardComponent
        imageUrl={organization.avatarUrl}
        name={organization.name}
        title="Who Knows?"
        subtitle="Location TODO"
        buttonLabel="Favorite"
        body={body}
        cardType="organization"
      />
    )
  }
}

export default OrganizationCard
