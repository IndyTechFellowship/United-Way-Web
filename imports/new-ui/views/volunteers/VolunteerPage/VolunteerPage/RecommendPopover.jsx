import _ from 'lodash'
import React, { Component } from 'react';

import { Button, Intent, Position, Toaster } from '@blueprintjs/core'

class RecommendPopover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      note: '',
      selectedPositionId: ''
    }
    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleRecommend = this.handleRecommend.bind(this)
  }

  handleNoteChange(e) {
    this.setState({ note: e.target.value })
  }

  handleSelectChange(e) {
    this.setState({ selectedPositionId: e.target.value })
  }

  handleRecommend() {
    if (this.props.currentUser && this.props.currentUser._id) {
      const opts = {userId: this.props.volunteer._id, orgAdminId: this.props.currentUser._id, note: this.state.note}
      Meteor.call('Positions.recommend', this.state.selectedPositionId, opts,
        (err, res) => {
          if (!err) {
            Toaster.create({
              className: "my-toaster",
              position: Position.BOTTOM,
            }).show({ intent: Intent.SUCCESS, message: "Position recommendation sent." })
          }
        })
    }
  }

  render() {
    const { orgs } = this.props
    let positions = []
    _.each(orgs, org => positions.push(org.positions.map(position => <option value={position._id}>{position.name}</option>)))
    return (
      <div style={styles.popover}>
        <label className="pt-label">
          Note
          <span className="pt-text-muted"> (optional)</span>
          <textarea 
            className="pt-input" 
            dir="auto"
            onChange={this.handleNoteChange}
            style={styles.textarea}
          ></textarea>
        </label>
        <label className="pt-label">
          Position
          <div className="pt-select">
            <select value={this.state.selectedPositionId} onChange={this.handleSelectChange}>
              <option value=''></option>
              {positions}
            </select>
          </div>
        </label>
        <div style={styles.actions}>
          <Button 
            text="Cancel"
            style={styles.cancel}
            className="pt-popover-dismiss"
          />
          <Button 
            text="Recommend"
            intent={Intent.PRIMARY}
            onClick={this.handleRecommend}
            className="pt-popover-dismiss"
          />
        </div>
      </div>
    );
  }
}

const styles = {
  popover: {
    padding: '20px'
  },
  textarea: {
    height: '100px',
    width: '400px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '10px'
  },
  cancel: {
    marginRight: '10px'
  }
}

export default RecommendPopover;