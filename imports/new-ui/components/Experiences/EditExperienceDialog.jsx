import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Alert, Button, Dialog, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'

import TagPicker from '/imports/new-ui/components/TagPicker'

class EditExperienceDialog extends Component {

  constructor(props) {
    super(props)
    let experience = _.cloneDeep(this.props.experience)
    this.state = {
      experience: experience,
      confirmCancelOpen: false
    }
    this.save = this.save.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.toggleConfirmCancel = this.toggleConfirmCancel.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  closeDialog() {
    let experience = _.cloneDeep(this.props.experience)
    if (_.isEqual(this.state.experience, experience)) {
      this.props.toggleDialog()
    } else {
      this.toggleConfirmCancel()
    }
  }

  toggleConfirmCancel() {
    this.setState({ confirmCancelOpen: !this.state.confirmCancelOpen })
  }

  resetState() {
    const experience = _.cloneDeep(this.props.experience)
    this.setState({
      experience: experience,
      confirmCancelOpen: false
    })
    this.props.toggleDialog()
  }

  save() {
    const experience = _.cloneDeep(this.state.experience)
    const newExperience = experience._id === null
    if (newExperience) {
      Meteor.call('Experience.insert', experience, (err, resp) => {
        let user = _.cloneDeep(this.props.volunteer)
        if (this.props.experienceType === 'volunteer') {
          user.profile.volunteerExperiences.push({ _id: resp })
        } else {
          user.profile.professionalExperiences.push({ _id: resp })
        }
        Meteor.call('User.update', user, (err, resp) => {
          this.props.toggleDialog()
        })
      })
    } else {
      Meteor.call('Experience.update', experience, (err, resp) => {
        this.props.toggleDialog()
      })
    }
  }

  render() {
    const { isOpen, toggleDialog, tags } = this.props
    return (
      <Dialog
        isOpen={isOpen}
        onClose={this.closeDialog}
        title={<div>{this.state.experience._id ? 'Edit Experience' : 'Add Experience'}</div>}
        canOutsideClickClose={false}
        style={styles.dialog}
      >
        <div className="pt-dialog-body" style={styles.dialogContent}>
          <div style={styles.columnLeft}>
            <label className="pt-label">
              Job Title
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.experience.title}
                onChange={(e) => this.setState({ experience: { ...this.state.experience, title: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              Company Name
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.experience.companyName}
                onChange={(e) => this.setState({ experience: { ...this.state.experience, companyName: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              Description
              <textarea
                style={styles.summary}
                className='pt-input pt-fill'
                dir='auto'
                onChange={(e) => this.setState({ experience: { ...this.state.experience, description: e.target.value }})}
                value={this.state.experience.description}
              />
            </label>
          </div>
          <div style={styles.columnRight}>
            <label className="pt-label">
              Location
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.experience.location}
                onChange={(e) => this.setState({ experience: { ...this.state.experience, location: e.target.value }})}
              />
            </label>
          </div>
        </div>
        <div className="pt-dialog-footer" style={styles.dialogFooter}>
          <Button text="Cancel" onClick={this.closeDialog} />
          <Button
            text="Save"
            iconName='floppy-disk'
            intent={Intent.PRIMARY}
            onClick={this.save}
          />
        </div>
        <Alert
          intent={Intent.DANGER}
          isOpen={this.state.confirmCancelOpen}
          cancelButtonText="Cancel"
          confirmButtonText="Confirm"
          onCancel={this.toggleConfirmCancel}
          onConfirm={this.resetState}
        >
          <p>
            Are you sure you want to close without saving? All changes will be lost.
          </p>
        </Alert>
      </Dialog>
    );
  }
}

EditExperienceDialog.propTypes = {
  experience: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleDialog: PropTypes.func
};

const styles = {
  h3: {
    color: '#106BA3',
    lineHeight: '1em'
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: '10px'
  },
  icon: isBoardPosition => ({
    color: isBoardPosition ? '#F29D49' : '#15B371',
    marginRight: '5px'
  }),
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
  dialogContent: {
    padding: '0 10px',
    display: 'flex',
    width: '800px'
  },
  dialogFooter: {
    padding: '0 10px 10px 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: '20px'
  },
  summary: {
    height: '150px'
  },
  tagsLabel: {
    marginBottom: '4px'
  },
  columnLeft: {
    flexBasis: '50%'
  },
  columnRight: {
    flexBasis: '50%',
    paddingLeft: '20px'
  },
  dialog: {
    width: 'auto'
  }
}

export default EditExperienceDialog;