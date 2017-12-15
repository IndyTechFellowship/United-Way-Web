import React, { Component } from 'react';

import { Button, Intent } from '@blueprintjs/core'

class ShowInterestPopover extends Component {
  render() {
    return (
      <div style={styles.popover}>
        <label className="pt-label">
          Note to send alongside your contact info 
          <span className="pt-text-muted">(optional)</span>
          <textarea className="pt-input pt-intent-primary" dir="auto" style={styles.textarea}></textarea>
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