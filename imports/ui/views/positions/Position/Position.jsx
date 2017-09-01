import React, { Component, PropTypes } from 'react'
import { Card, CardText, DatePicker, FlatButton, RaisedButton, TextField } from 'material-ui'
import _ from 'lodash'

import Loading from '/imports/ui/components/Loading'
import CardComponent from '/imports/ui/components/CardComponent'
import ShowInterestButton from '/imports/ui/components/ShowInterestButton'

class Position extends Component {

  render() {
    const { addPosition, organization, position, updatePosition, deletePosition } = this.props
    if (this.props.loading) {
      return <Loading/>
    } else {
      let positionName = !position.name ? '' : position.name
      let orgName = !_.get(this.props, 'organization.name') ? '' : this.props.organization.name;

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

      const edit = (
        <div>
          <TextField
            hintText="ex. Committee Member"
            floatingLabelText="Name"
            floatingLabelFixed={true}
            value={position.name}
            onChange={e => updatePosition(position._id, 'name', e.target.value)}
            fullWidth={true}
          />
          <div>
            <div style={styles.descriptionLabel}>Description</div>
            <textarea style={styles.textarea} value={position.description} onChange={e => updatePosition(position._id, 'description', e.target.value)} />
          </div>
          <RaisedButton 
            label="Delete Position" 
            labelColor='white'
            backgroundColor='#E53935'
            fullWidth={true}
            onClick={e => deletePosition(position._id)}
          />
        </div>
      )
      const view = (
        <CardComponent
          key={position._id}
          imageUrl={imageUrl}
          name={positionName}
          title={orgName}
          subtitle="Open"
          body={body}
          cardType="position"
          cardButtons={positionButtons}
        />
      )

      const positionButtons = () => <PositionButtons position={position} />
      return (
        <div style={styles.card}>
          {this.props.isEditing ? edit : view}
        </div>
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
          <ShowInterestButton position={this.props.position}/>
          <FlatButton
              label="BOOKMARK"
              labelStyle={styles.button.label}
              style={styles.button.style}
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
  },
  card: {
    marginBottom: '16px'
  }
}
