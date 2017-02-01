import React, {Component} from 'react'

import {RaisedButton} from 'material-ui'

class PositionBasics extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let opportunityTypeIcon = this.props.position.opportunityType === 'committee' ? 'committee icon' : 'board icon';

    return (
      <div style={styles.basicInfoContainer}>
        <div>
          {opportunityTypeIcon}
        </div>
        <div style={styles.basicDetailsContainer}>
          <div>
            {this.props.position.positionType}
          </div>
          <div>
            {this.props.position.name}
          </div>
          <div>
            {this.props.position.deadline.toDateString()}
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <RaisedButton onClick={this.onExpressInterest} label="Express Interest"/>
          <RaisedButton onClick={this.onSave} label="Save"/>
        </div>
      </div>
    )
  }

  // TODO: need to have login state working in order to add these to user
  onExpressInterest() {
    console.log('express interest clicked');
  }

  onSave() {
    console.log('save clicked');
  }
}

const styles = {
  basicInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  basicDetailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '12px',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

export default PositionBasics