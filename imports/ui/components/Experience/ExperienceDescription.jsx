import React, { Component } from 'react'

class ExperienceDescription extends Component {
  render() {
    return (
      <div style={styles.description}>
        {this.props.description}
      </div>
    )
  }
}

const styles = {
  description: {
    fontSize: '15px',
  },
}

export default ExperienceDescription
