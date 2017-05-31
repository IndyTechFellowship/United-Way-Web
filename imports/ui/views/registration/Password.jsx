import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class Password extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div>
          Create your secure password
        </div>
        <TextField
          floatingLabelText="Password"
          type="password"
        />
        <TextField
          floatingLabelText="Confirm Password"
          type="password"
        />
      </div>
    )
  }

}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default Password

