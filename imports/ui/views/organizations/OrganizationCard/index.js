import React, { Component } from 'react'

import CardComponent from '/imports/ui/components/CardComponent'

class OrganizationCard extends Component {
  render() {
    const organization = this.props.organization
    return (
      <CardComponent
        imageUrl={organization.avatarUrl}
        supertitle="Education"
        title={organization.name}
        subtitle={organization.tagline}
        buttonLabel="Favorite"
        body={organization.description}
      />
    )
  }
}

export default OrganizationCard
