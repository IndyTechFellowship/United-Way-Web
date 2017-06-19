import React, { Component, PropTypes } from 'react'
import { FlatButton } from 'material-ui'

import Loading from '/imports/ui/components/Loading'
import CardComponent from '/imports/ui/components/CardComponent'
import ShowInterestButton from '/imports/ui/components/ShowInterestButton'

class Position extends Component {

  render() {
    if (this.props.loading) {
      return <Loading/>
    } else {
      let position = this.props.position
      let positionName = !position.name ? '' : position.name
      let organization = this.props.organization

      let skills = position.skills.map((skill) => {
        return skill.name
      }).join(', ')

      let imageUrl = position.opportunityType === 'Committee' ? 'committee-icon.svg' : 'board-icon.svg'

      let body = {
        leftColumn: [
          {
            label: 'Position Category',
            content: position.positionType
          },
          {
            label: 'Time Commitment',
            content: position.timeCommitment
          },
          {
            label: 'Monetary Commitment',
            content: position.monetaryCommitment
          }
        ],
        rightColumn: {
          label: 'Skills Needed',
          content: skills
        }
      }

      const positionButtons = () => <PositionButtons positionId={position._id} />
      return (
          <CardComponent
              key={position._id}
              imageUrl={imageUrl}
              name={positionName}
              title={organization.name}
              subtitle="Open"
              body={body}
              cardType="position"
              cardButtons={positionButtons}
          />
      )
    }
  }
}

Position.propTypes = {
  loading: PropTypes.bool.isRequired,
  position: PropTypes.object.isRequired,
  organization: PropTypes.object,
}

export default Position

class PositionButtons extends Component {
  render() {
    return (
        <div style={styles.buttonContainer}>
          <ShowInterestButton positionId={this.props.positionId}/>
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
      fontWeight: '500',
    },

    style: {
      height: '32px',
      lineHeight: 1
    }
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  }
}
