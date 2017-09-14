import React, { Component } from 'react'
import { FlatButton } from 'material-ui'

import Loading from '/imports/ui/components/Loading'
import CardComponent from '/imports/ui/components/CardComponent'
import { CloudinaryTransformToAvatar } from '/imports/helpers/images';

class OrganizationCard extends Component {
  render() {
    if (this.props.loading) {
      return <Loading/>
    } else {
      let organization = this.props.organization
      let searchTags = organization.tags.map((tag) => {
        return tag.name
      }).join(', ')

      let body = {
        leftColumn: [{
          label: 'About Us',
          content: organization.description
        }],
        rightColumn: {
          label: 'Search Tags',
          content: searchTags
        }
      }

      return (
        <div style={styles.card}>
          <CardComponent
            imageUrl={organization.avatarUrl}
            name={organization.name}
            title={organization.tagline}
            subtitle={`${organization.city}, ${organization.state}`}
            buttonLabel="Favorite"
            body={body}
            cardType="organization"
            cardButtons={OrganizationButtons}
          />
        </div>
      )
    }
  }

}

export default OrganizationCard

class OrganizationButtons extends Component {
  render() {
    return (
      <div style={styles.buttonContainer}>
        {/* TODO: V2 Feature */}
        {/*<FlatButton*/}
            {/*label="BOOKMARK"*/}
            {/*labelStyle={styles.button.label}*/}
            {/*style={styles.button.style}*/}
            {/*backgroundColor={styles.button.backgroundColor}*/}
        {/*/>*/}
      </div>
    )
  }
}

const styles = {
  button: {
    backgroundColor: '#0277bd',

    label: {
      color: '#ffffff',
      fontSize: '14px',
      fontWeight: '500'
    },

    style: {
      height: '32px',
      lineHeight: 1
    }
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '100%'
  },
  card: {
    marginBottom: '16px',
    height: '320px'
  }
}