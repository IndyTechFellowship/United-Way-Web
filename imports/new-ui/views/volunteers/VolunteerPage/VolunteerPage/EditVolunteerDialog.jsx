import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Alert, Button, Dialog, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'
import { Meteor } from 'meteor/meteor'
import { CloudinaryTransformToAvatar } from '/imports/helpers/images'
import Dropzone from 'react-dropzone'

import TagPicker from '/imports/new-ui/components/TagPicker'

class EditVolunteerDialog extends Component {

  constructor(props) {
    super(props)
    const volunteerProfile = _.cloneDeep(this.props.volunteer.profile)
    this.state = {
      volunteerProfile: { ...volunteerProfile },
      confirmCancelOpen: false
    }
    this.save = this.save.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.toggleConfirmCancel = this.toggleConfirmCancel.bind(this)
    this.resetState = this.resetState.bind(this)
    this.addSkill = this.addSkill.bind(this)
    this.removeSkill = this.removeSkill.bind(this)
    this.addInterest = this.addInterest.bind(this)
    this.removeInterest = this.removeInterest.bind(this)
    this.uploadAvatar = this.uploadAvatar.bind(this)
  }

  closeDialog() {
    const volunteerProfile = _.cloneDeep(this.props.volunteer.profile)
    if (_.isEqual(this.state.volunteerProfile, volunteerProfile)) {
      this.props.toggleDialog()
    } else {
      this.toggleConfirmCancel()
    }
  }

  toggleConfirmCancel() {
    this.setState({ confirmCancelOpen: !this.state.confirmCancelOpen })
  }

  resetState() {
    const volunteerProfile = _.cloneDeep(this.props.volunteer.profile)
    this.setState({
      volunteerProfile: volunteerProfile,
      confirmCancelOpen: false
    })
    this.props.toggleDialog()
  }

  save() {
    Meteor.call('User.update', _.assign(this.props.volunteer, { profile: this.state.volunteerProfile }), (err, resp) => {
      this.props.toggleDialog()
    })
  }

  addSkill(tag) {
    let volunteerProfile = _.cloneDeep(this.state.volunteerProfile)
    volunteerProfile.skills.push(tag)
    this.setState({ volunteerProfile })
  }

  removeSkill(id) {
    let volunteerProfile = _.cloneDeep(this.state.volunteerProfile)
    _.remove(volunteerProfile.skills, { _id: id })
    this.setState({ volunteerProfile })
  }

  addInterest(tag) {
    let volunteerProfile = _.cloneDeep(this.state.volunteerProfile)
    volunteerProfile.interests.push(tag)
    this.setState({ volunteerProfile })
  }

  removeInterest(id) {
    let volunteerProfile = _.cloneDeep(this.state.volunteerProfile)
    _.remove(volunteerProfile.interests, { _id: id })
    this.setState({ volunteerProfile })
  }

  uploadAvatar() {
    cloudinary.openUploadWidget({ 
      cloud_name: Meteor.settings.public.cloudinary.cloudName, 
      upload_preset: Meteor.settings.public.cloudinary.uploadPreset,
    }, (error, result) => {
      if (error) console.error(error);
      else {
        this.setState({ volunteerProfile: { ...this.state.volunteerProfile, avatar: { ...this.state.volunteerProfile.avatar, original: result[0].url }} })
      }
    });
  }

  render() {
    const { isOpen, toggleDialog, tags } = this.props
    return (
      <Dialog
        isOpen={isOpen}
        onClose={this.closeDialog}
        title={<div>Edit Your Profile</div>}
        canOutsideClickClose={false}
        style={styles.dialog}
      >
        <div className="pt-dialog-body" style={styles.dialogContent}>
          <div style={styles.columnLeft}>
            <label className="pt-label">
              Avatar
              <div style={styles.avatar}>
                <div style={styles.icon(this.state.volunteerProfile.avatar ? this.state.volunteerProfile.avatar.original : '')}></div>
                <Button
                  text="Upload New Avatar"
                  onClick={this.uploadAvatar}
                />
              </div>
            </label>
            <label className="pt-label">
              Name
              <div className='pt-control-group'>
                <input 
                  className="pt-input pt-fill" 
                  type="text"
                  placeholder='First Name'
                  dir="auto"
                  value={this.state.volunteerProfile.firstName}
                  onChange={(e) => this.setState({ volunteerProfile: { ...this.state.volunteerProfile, firstName: e.target.value }})}
                />
                <input 
                  className="pt-input pt-fill" 
                  type="text"
                  placeholder='Last Name'
                  dir="auto"
                  value={this.state.volunteerProfile.lastName}
                  onChange={(e) => this.setState({ volunteerProfile: { ...this.state.volunteerProfile, lastName: e.target.value }})}
                />
              </div>
            </label>
            <label className="pt-label">
              Tagline
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.volunteerProfile.tagline}
                onChange={(e) => this.setState({ volunteerProfile: { ...this.state.volunteerProfile, tagline: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              Summary
              <textarea
                style={styles.summary}
                className='pt-input pt-fill'
                dir='auto'
                onChange={(e) => this.setState({ volunteerProfile: { ...this.state.volunteerProfile, summary: e.target.value }})}
                value={this.state.volunteerProfile.summary}
              />
            </label>
          </div>
          <div style={styles.columnRight}>
            <div>
              <div>Skills</div>
              <div style={styles.helperText}>Skills you already know (such as skills you learned in school, in your career, or in previous volunteer experiences)</div>
              <div>
                {
                  this.state.volunteerProfile.skills.map(tag => 
                    <Tag
                      className='pt-minimal pt-large'
                      key={tag._id}
                      style={styles.tag}
                      onRemove={() => this.removeSkill(tag._id)}
                    >
                      {tag.name}
                    </Tag>
                  )
                }
                <TagPicker
                  selectedTags={this.state.volunteerProfile.skills}
                  tags={tags}
                  onSelect={this.addSkill}
                >
                  <Button
                    text="Add Skill"
                    iconName='plus'
                    className='pt-minimal'
                    intent={Intent.PRIMARY}
                  />
                </TagPicker>
              </div>
            </div>
            <br />
            <div>
              <div>Interests</div>
              <div style={styles.helperText}>Interests you have but don't necessarily have much experience with</div>
              <div>
                {
                  this.state.volunteerProfile.interests.map(tag => 
                    <Tag
                      className='pt-minimal pt-large'
                      key={tag._id}
                      style={styles.tag}
                      onRemove={() => this.removeInterest(tag._id)}
                    >
                      {tag.name}
                    </Tag>
                  )
                }
                <TagPicker
                  selectedTags={this.state.volunteerProfile.interests}
                  tags={tags}
                  onSelect={this.addInterest}
                >
                  <Button
                    text="Add Interest"
                    iconName='plus'
                    className='pt-minimal'
                    intent={Intent.PRIMARY}
                  />
                </TagPicker>
              </div>
            </div>
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

EditVolunteerDialog.propTypes = {
  volunteer: PropTypes.object,
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
  icon: avatarUrl => ({
    height: '56px',
    width: '56px',
    borderRadius: '50%',
    border: '1px solid #106BA3',
    backgroundImage: `url(${avatarUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    color: 'white',
    flexShrink: '0',
    marginRight: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '4px'
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
  helperText: {
    color: '#5C7080',
    fontSize: '11px',
    marginBottom: '4px',
    lineHeight: '1.3'
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
  },
  avatar: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default EditVolunteerDialog;