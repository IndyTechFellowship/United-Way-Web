import React, { Component } from 'react';

import { Button, Intent } from '@blueprintjs/core'

class ShowInterestPopover extends Component {

  constructor(props) {
    super(props)
    this.state = {
      note: ''
    }
    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.handleExpressInterest = this.handleExpressInterest.bind(this)
  }

  handleNoteChange(e) {
    this.setState({ note: e.target.value })
  }

  handleExpressInterest() {
    const positionId = this.props.position._id

    if (this.props.currentUser._id) {
      const opts = {userId: this.props.currentUser._id, note: this.state.note}
      Meteor.call('Positions.expressInterest', positionId, opts, (err, res) => {
        // hide
      })
    }
  }

  render() {
    return (
      <div style={styles.popover}>
        <label className="pt-label">
          Note to send alongside your contact info 
          <span className="pt-text-muted"> (optional)</span>
          <textarea 
            className="pt-input pt-intent-primary" 
            dir="auto"
            onChange={this.handleNoteChange}
            style={styles.textarea}
          ></textarea>
        </label>
        <div style={styles.actions}>
          <Button 
            text="Cancel"
            style={styles.cancel}
            className="pt-popover-dismiss"
          />
          <Button 
            text="Show Interest"
            intent={Intent.PRIMARY}
            onClick={this.handleExpressInterest}
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

export default ShowInterestPopover;