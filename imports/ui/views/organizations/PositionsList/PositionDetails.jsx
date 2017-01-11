import React, {Component} from 'react'

class PositionDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={styles.descriptionContainer}>
        <div>
          {this.props.position.timeCommitment}
        </div>
        <div>
          {this.props.position.monetaryCommitment}
        </div>
        <div>
          {this.props.position.skills.join(', ')}
        </div>
        <div>
          {this.props.position.description}
        </div>
      </div>
    )
  }
}

const styles = {
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
}

export default PositionDetails