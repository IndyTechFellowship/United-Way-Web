import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Alert, Button, Dialog, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'

import TagPicker from '/imports/new-ui/components/TagPicker'

class EditOrganizationDialog extends Component {

  constructor(props) {
    super(props)
    const organization = _.cloneDeep(this.props.organization)
    _.each(organization.positions, position => {
      position.organization = null
    })
    this.state = {
      organization: { ...organization },
      confirmCancelOpen: false
    }
    this.save = this.save.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.toggleConfirmCancel = this.toggleConfirmCancel.bind(this)
    this.resetState = this.resetState.bind(this)
    this.addTag = this.addTag.bind(this)
    this.removeTag = this.removeTag.bind(this)
    this.uploadAvatar = this.uploadAvatar.bind(this)
  }

  closeDialog() {
    const organization = _.cloneDeep(this.props.organization)
    _.each(organization.positions, position => {
      position.organization = null
    })
    if (_.isEqual(this.state.organization, organization)) {
      this.props.toggleDialog()
    } else {
      this.toggleConfirmCancel()
    }
  }

  toggleConfirmCancel() {
    this.setState({ confirmCancelOpen: !this.state.confirmCancelOpen })
  }

  resetState() {
    const organization = _.cloneDeep(this.props.organization)
    _.each(organization.positions, position => {
      position.organization = null
    })
    this.setState({
      organization: organization,
      confirmCancelOpen: false
    })
    this.props.toggleDialog()
  }

  save() {
    Meteor.call('Organization.update', _.cloneDeep(this.state.organization), (err, resp) => {
      this.props.toggleDialog()
    })
  }

  addTag(tag) {
    let organization = _.cloneDeep(this.state.organization)
    organization.tags.push(tag)
    this.setState({ organization })
  }

  removeTag(id) {
    let organization = _.cloneDeep(this.state.organization)
    console.log(organization)
    _.remove(organization.tags, { _id: id })
    console.log(organization)
    this.setState({ organization })
  }

  uploadAvatar() {
    cloudinary.openUploadWidget({ 
      cloud_name: Meteor.settings.public.cloudinary.cloudName, 
      upload_preset: Meteor.settings.public.cloudinary.uploadPreset,
    }, (error, result) => {
      if (error) console.error(error);
      else {
        this.setState({ organization: { ...this.state.organization, avatarUrl: result[0].url } })
      }
    });
  }

  render() {
    const { isOpen, toggleDialog, tags } = this.props
    return (
      <Dialog
        isOpen={isOpen}
        onClose={this.closeDialog}
        title={<div>Edit Organization Profile</div>}
        canOutsideClickClose={false}
        style={styles.dialog}
      >
        <div className="pt-dialog-body" style={styles.dialogContent}>
          <div style={styles.columnLeft}>
            <label className="pt-label">
              Avatar
              <div style={styles.avatar}>
                <div style={styles.icon(this.state.organization.avatarUrl ? this.state.organization.avatarUrl : '')}></div>
                <Button
                  text="Upload New Avatar"
                  onClick={this.uploadAvatar}
                />
              </div>
            </label>
            <label className="pt-label">
              Organization Name
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.organization.name}
                onChange={(e) => this.setState({ organization: { ...this.state.organization, name: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              <div>Tagline</div>
              <div style={styles.helperText}>A short slogan, motto, or phrase about your organization</div>
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.organization.tagline}
                onChange={(e) => this.setState({ organization: { ...this.state.organization, tagline: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              <div>Summary</div>
              <div style={styles.helperText}>A description of your organization's mission, goals, and initiatives</div>
              <textarea
                style={styles.summary}
                className='pt-input pt-fill'
                dir='auto'
                onChange={(e) => this.setState({ organization: { ...this.state.organization, description: e.target.value }})}
                value={this.state.organization.description}
              />
            </label>
          </div>
          <div style={styles.columnRight}>
            <label className="pt-label">
              Location
              <div className='pt-control-group'>
                <input 
                  className="pt-input pt-fill" 
                  type="text"
                  placeholder='City'
                  dir="auto"
                  value={this.state.organization.city}
                  onChange={(e) => this.setState({ organization: { ...this.state.organization, city: e.target.value }})}
                />
                <input 
                  className="pt-input pt-fill" 
                  type="text"
                  placeholder='State'
                  dir="auto"
                  value={this.state.organization.state}
                  onChange={(e) => this.setState({ organization: { ...this.state.organization, state: e.target.value }})}
                />
              </div>
            </label>
            <label className="pt-label">
              Website
              <input
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.organization.websiteUrl}
                onChange={(e) => this.setState({ organization: { ...this.state.organization, websiteUrl: e.target.value }})}
              />
            </label>
            <div>
              <div style={styles.tagsLabel}>Tags</div>
              <div>
                {
                  this.state.organization.tags.map(tag => 
                    <Tag
                      className='pt-minimal pt-large'
                      key={tag._id}
                      style={styles.tag}
                      onRemove={() => this.removeTag(tag._id)}
                    >
                      {tag.name}
                    </Tag>
                  )
                }
                <TagPicker
                  selectedTags={this.state.organization.tags}
                  tags={tags}
                  onSelect={this.addTag}
                >
                  <Button
                    text="Add Tag"
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

EditOrganizationDialog.propTypes = {
  organization: PropTypes.object,
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
    borderRadius: '5px',
    border: '1px solid #106BA3',
    backgroundImage: `url(${avatarUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor: 'white',
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
  },
  avatar: {
    display: 'flex',
    alignItems: 'center'
  },
  helperText: {
    color: '#5C7080',
    fontSize: '11px',
    marginBottom: '4px',
    lineHeight: '1.3'
  },
}

export default EditOrganizationDialog;