import React, { Component } from 'react'
import { FlatButton } from 'material-ui'

import Loading from '/imports/ui/components/Loading'
import CardComponent from '/imports/ui/components/CardComponent'

class OrganizationCard extends Component {
  render() {
    if (this.props.loading) {
      return <Loading/>
    } else {

      console.log(this.props)
      const organization = this.props.organization
      let body = {
        leftColumn: {
          label: 'Other Website URL',
          content: organization.websiteUrl
        },
        rightColumn: {
          label: 'Search Tags',
          content: organization.tags.join(', ')
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
              cardButtons={OrganizationButtons}
          />
      )
    }
  }

}

export default OrganizationCard

class OrganizationButtons extends Component {
  render() {
    return (
        <div style={styles.buttonContainer}>
          <FlatButton
              label="BOOKMARK"
              labelStyle={styles.button.label}
              style={styles.button.style}
              fullWidth={true}
              backgroundColor={styles.button.backgroundColor}
          />
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
  }
}