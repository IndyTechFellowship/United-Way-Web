import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Alert, Button, Card, Icon, Intent, Tag, Tooltip } from '@blueprintjs/core'

import PositionDialog from './PositionDialog'
import EditPositionDialog from './EditPositionDialog'

class Position extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      isEditing: false,
      confirmCancelOpen: false
    }
    this.toggleDialog = this.toggleDialog.bind(this)
    this.toggleIsEditing = this.toggleIsEditing.bind(this)
    this.toggleConfirmCancel = this.toggleConfirmCancel.bind(this)
    this.deletePosition = this.deletePosition.bind(this)
  }

  toggleDialog() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  toggleIsEditing(e) {
    this.setState({ isEditing: !this.state.isEditing })
    e && e.stopPropagation()
  }

  toggleConfirmCancel(e) {
    this.setState({ confirmCancelOpen: !this.state.confirmCancelOpen })
    e && e.stopPropagation()
  }

  deletePosition() {
    let organization = _.cloneDeep(this.props.position.organization)
    _.remove(organization.positions, { _id: this.props.position._id})
    organization.positions = organization.positions.map(position => position._id)
    Meteor.call('Organization.update', organization, (err, resp) => {
      Meteor.call('Position.delete', this.props.position._id, (err, resp) => {
        this.setState({
          confirmCancelOpen: false
        })
      })
    })
  }

  render() {
    const { position } = this.props
    const userId = Meteor.userId()
    const canEdit = userId ? _.includes(position.organization.admins, userId) : false
    return (
      <div>
        <div style={styles.card}>
          <Card interactive={true} onClick={this.toggleDialog}>
            <div style={styles.cardContent}>
              {canEdit ?
                <div style={styles.editButton}>
                  <Tooltip content="Edit this position" hoverOpenDelay={200}>
                    <Button
                      iconName='edit'
                      intent={Intent.PRIMARY}
                      onClick={this.toggleIsEditing}
                      style={styles.edit}
                    />
                  </Tooltip>
                  <Tooltip content="Delete this position" hoverOpenDelay={200}>
                    <Button
                      iconName='trash'
                      intent={Intent.DANGER}
                      onClick={this.toggleConfirmCancel}
                    />
                  </Tooltip>
                </div>
              :
                null
              }
              <div style={styles.cardHeader}>
                <Tooltip content={position.opportunityType === 'Board' ? 'Board Position' : 'Committee Position'} hoverOpenDelay={200}>
                  <div style={styles.icon(position.opportunityType === 'Board')}>
                    <Icon iconName={position.opportunityType === 'Board' ? 'pt-icon-person' : 'pt-icon-people'} />
                  </div>
                </Tooltip>
                <div style={{maxWidth: '90%'}} className="pt-text-overflow-ellipsis">
                  <h3 style={styles.h3}>{position.name}</h3>
                  <h6 style={styles.h3}>
                    <Tooltip content="View this organization's profile" hoverOpenDelay={200}>
                      <Link to={`/organizations/${position.organization._id}`}>{position.organization.name}</Link>
                    </Tooltip>
                  </h6>
                </div>
              </div>
              <div style={styles.attributeContainer}>
                <div style={styles.attributeColumn}>
                  <div style={styles.attribute}>
                    <div style={styles.label}>Position Category</div>
                    <div>{position.positionType || '-'}</div>
                  </div>
                  <div style={styles.attribute}>
                    <div style={styles.label}>Time Commitment</div>
                    <div>{position.timeCommitment || '-'}</div>
                  </div>
                  <div style={styles.attribute}>
                    <div style={styles.label}>Monetary Commitment</div>
                    <div>{position.monetaryCommitment || '-'}</div>
                  </div>
                </div>
                <div style={styles.attributeColumn}>
                  <div style={styles.attribute}>
                    <div style={styles.label}>Desired Skills</div>
                    <div>{position.skills.length > 0 ? position.skills.map(skill => <Tag key={skill._id} style={styles.tag}>{skill.name}</Tag>) : '-'}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <PositionDialog 
          position={position}
          isOpen={this.state.isOpen}
          toggleDialog={this.toggleDialog}
        />
        <EditPositionDialog
          position={position}
          isOpen={this.state.isEditing}
          toggleDialog={this.toggleIsEditing}
        />
        <Alert
          intent={Intent.DANGER}
          isOpen={this.state.confirmCancelOpen}
          cancelButtonText="Cancel"
          confirmButtonText="Delete"
          onCancel={this.toggleConfirmCancel}
          onConfirm={this.deletePosition}
        >
          <p>
            Are you sure you want to delete this position?
          </p>
        </Alert>
      </div>
    );
  }
}

Position.propTypes = {
  position: PropTypes.object
};

const styles = {
  card: {
    marginRight: '10px',
    marginBottom: '10px',
    position: 'relative'
  },
  cardContent: {
    width: '430px',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    paddingBottom: '30px'
  },
  icon: isBoardPosition => ({
    height: '40px',
    width: '40px',
    borderRadius: '50%',
    background: isBoardPosition ? '#F29D49' : '#15B371',
    color: 'white',
    flexShrink: '0',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }),
  h3: {
    color: '#106BA3'
  },
  cardFooter: {
    flexShrink: '0',
    marginTop: '20px'
  },
  attributeContainer: {
    display: 'flex',
    height: '100%',
    overflow: 'auto'
  },
  attributeColumn: {
    flex: '0 0 50%'
  },
  attribute: {
    padding: '0 10px 10px 0'
  },
  label: {
    fontWeight: 'bold'
  },
  tag: {
    margin: '2px'
  },
  editButton: {
    position: 'absolute',
    top: '-8px',
    right: '10px'
  },
  edit: {
    marginRight: '5px'
  }
}

export default Position;