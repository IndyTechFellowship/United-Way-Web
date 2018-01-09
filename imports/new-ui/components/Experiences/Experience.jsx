import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Alert, Button, Card, Icon, Intent, Position, Tag, Tooltip } from '@blueprintjs/core'

import EditExperienceDialog from './EditExperienceDialog'

class Experience extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      confirmCancelOpen: false
    }
    this.toggleIsEditing = this.toggleIsEditing.bind(this)
    this.toggleConfirmCancel = this.toggleConfirmCancel.bind(this)
    this.deleteExperience = this.deleteExperience.bind(this)
  }

  toggleIsEditing(e) {
    this.setState({ isEditing: !this.state.isEditing })
    e && e.stopPropagation()
  }

  toggleConfirmCancel(e) {
    this.setState({ confirmCancelOpen: !this.state.confirmCancelOpen })
    e && e.stopPropagation()
  }

  deleteExperience() {
    Meteor.call('Experience.delete', this.props.experience._id, (err, resp) => {
      this.setState({
        confirmCancelOpen: false
      })
    })
  }

  render() {
    const { experience, experienceType, canEdit, volunteer } = this.props
    return (
      <div>
        <div style={styles.card}>
          <Card interactive={true}>
            <div style={styles.cardContent}>
              {canEdit ?
                <div style={styles.editButton}>
                  <Tooltip content="Edit this experience" hoverOpenDelay={200}>
                    <Button
                      iconName='edit'
                      intent={Intent.PRIMARY}
                      onClick={this.toggleIsEditing}
                      style={styles.edit}
                    />
                  </Tooltip>
                  <Tooltip content="Delete this experience" hoverOpenDelay={200}>
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
                <div className="pt-text-overflow-ellipsis">
                  <h3 style={styles.h3}>{experience.title}</h3>
                  <h6 style={styles.h3}>{experience.companyName}</h6>
                </div>
              </div>
              <div style={styles.attributeContainer}>
                <div style={styles.attributeColumn}>
                  <div style={styles.attribute}>
                    <div style={styles.label}>Location</div>
                    <div>{experience.location}</div>
                  </div>
                </div>
                <div style={styles.attributeColumn}>
                  <div style={styles.attribute}>
                    <div style={styles.label}>Description</div>
                    <div>{experience.description}</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <EditExperienceDialog
          experienceType={experienceType}
          experience={experience}
          volunteer={volunteer}
          isOpen={this.state.isEditing}
          toggleDialog={this.toggleIsEditing}
        />
        <Alert
          intent={Intent.DANGER}
          isOpen={this.state.confirmCancelOpen}
          cancelButtonText="Cancel"
          confirmButtonText="Delete"
          onCancel={this.toggleConfirmCancel}
          onConfirm={this.deleteExperience}
        >
          <p>
            Are you sure you want to delete this experience?
          </p>
        </Alert>
      </div>
    );
  }
}

Experience.propTypes = {
  experience: PropTypes.object
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
    paddingBottom: '50px'
  },
  icon: avatarUrl => ({
    height: '60px',
    width: '60px',
    borderRadius: '5px',
    border: '1px solid #106BA3',
    background: `url(${avatarUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: 'white',
    flexShrink: '0',
    marginRight: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
  link: {
    textDecoration: 'none',
    color: 'inherit'
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

export default Experience;