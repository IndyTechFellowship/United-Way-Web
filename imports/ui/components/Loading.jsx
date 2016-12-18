import { CircularProgress } from 'material-ui'
import React, { Component } from 'react'

const styles = {
  loading: {
    display: 'flex',
    margin: '50px',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

class Loading extends Component {

  render() {
    return (
      <div style={styles.loading}>
        <CircularProgress />
      </div>
    )
  }

}

export default Loading
