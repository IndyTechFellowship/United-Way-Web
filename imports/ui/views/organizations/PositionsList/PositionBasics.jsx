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
        <div>
          <RaisedButton label="Express Interest"></RaisedButton>
        </div>
      </div>
    )
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
}

export default PositionBasics