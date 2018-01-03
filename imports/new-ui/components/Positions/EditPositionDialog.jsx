import _ from 'lodash'
import React, { Component } from 'react';
import { Link } from 'react-router'
import PropTypes from 'prop-types';
import { Alert, Button, Dialog, Icon, Intent, Popover, Position, Tag, Tooltip } from '@blueprintjs/core'

import TagPicker from '/imports/new-ui/components/TagPicker'

class EditPositionDialog extends Component {

  constructor(props) {
    super(props)
    let position = _.cloneDeep(this.props.position)
    position.organization = null
    this.state = {
      position: position,
      confirmCancelOpen: false
    }
    this.save = this.save.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.toggleConfirmCancel = this.toggleConfirmCancel.bind(this)
    this.resetState = this.resetState.bind(this)
    this.addTag = this.addTag.bind(this)
    this.removeTag = this.removeTag.bind(this)
  }

  closeDialog() {
    let position = _.cloneDeep(this.props.position)
    position.organization = null
    if (_.isEqual(this.state.position, position)) {
      this.props.toggleDialog()
    } else {
      this.toggleConfirmCancel()
    }
  }

  toggleConfirmCancel() {
    this.setState({ confirmCancelOpen: !this.state.confirmCancelOpen })
  }

  resetState() {
    const position = _.cloneDeep(this.props.position)
    position.organization = null
    this.setState({
      position: position,
      confirmCancelOpen: false
    })
    this.props.toggleDialog()
  }

  save() {
    const position = _.cloneDeep(this.state.position)
    const newPosition = position._id === null
    if (newPosition) {
      Meteor.call('Position.insert', position, (err, resp) => {
        let organization = _.cloneDeep(this.props.position.organization)
        organization.positions = organization.positions.map(position => position._id)
        organization.positions.push({ _id: resp })
        Meteor.call('Organization.update', organization, (err, resp) => {
          this.props.toggleDialog()
        })
      })
    } else {
      Meteor.call('Position.update', position, (err, resp) => {
        this.props.toggleDialog()
      })
    }
  }

  addTag(tag) {
    let position = _.cloneDeep(this.state.position)
    position.skills.push(tag)
    this.setState({ position })
  }

  removeTag(id) {
    let position = _.cloneDeep(this.state.position)
    _.remove(position.skills, { _id: id })
    this.setState({ position })
  }

  render() {
    const { isOpen, toggleDialog, tags } = this.props
    return (
      <Dialog
        isOpen={isOpen}
        onClose={this.closeDialog}
        title={<div>Edit Position</div>}
        canOutsideClickClose={false}
        style={styles.dialog}
      >
        <div className="pt-dialog-body" style={styles.dialogContent}>
          <div style={styles.columnLeft}>
            <label className="pt-label">
              Type
              <div className="pt-select">
                <select 
                  value={this.state.position.opportunityType} 
                  onChange={(e) => this.setState({ position: { ...this.state.position, opportunityType: e.target.value }})}
                >
                  <option value="Committee">Committee</option>
                  <option value="Board">Board</option>
                </select>
              </div>
            </label>
            <label className="pt-label">
              Position Name
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.position.name}
                onChange={(e) => this.setState({ position: { ...this.state.position, name: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              Description
              <textarea
                style={styles.summary}
                className='pt-input pt-fill'
                dir='auto'
                onChange={(e) => this.setState({ position: { ...this.state.position, description: e.target.value }})}
                value={this.state.position.description}
              />
            </label>
          </div>
          <div style={styles.columnRight}>
            <label className="pt-label">
              Category
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.position.positionType}
                onChange={(e) => this.setState({ position: { ...this.state.position, positionType: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              Time Commitment
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.position.timeCommitment}
                onChange={(e) => this.setState({ position: { ...this.state.position, timeCommitment: e.target.value }})}
              />
            </label>
            <label className="pt-label">
              Monetary Commitment
              <input 
                className="pt-input pt-fill" 
                type="text"
                dir="auto"
                value={this.state.position.monetaryCommitment}
                onChange={(e) => this.setState({ position: { ...this.state.position, monetaryCommitment: e.target.value }})}
              />
            </label>
            <div>
              <div style={styles.tagsLabel}>Skills</div>
              <div>
                {
                  this.state.position.skills.map(tag => 
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
                  selectedTags={this.state.position.skills}
                  tags={tags}
                  onSelect={this.addTag}
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

EditPositionDialog.propTypes = {
  position: PropTypes.object,
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

export default EditPositionDialog;