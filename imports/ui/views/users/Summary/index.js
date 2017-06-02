import React, { Component } from 'react'

import Title from '/imports/ui/components/Title'

class Summary extends Component {
  render() {
    return (
      <div>
        <Title>Summary</Title>
        <div style={styles.summary}>
          {this.props.summary}
        </div>
      </div>
    )
  }
}

const styles = {
  summary: {
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '16px'
  }
}

export default Summary
