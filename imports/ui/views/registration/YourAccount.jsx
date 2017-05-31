import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

class YourAccount extends Component {

  render() {
    return (
      <div style={styles.container}>
        <div>
          Confirm or edit your account information
        </div>
        <TextField
          defaultValue="Debbie"
          floatingLabelText="First Name"
        />
        <TextField
          defaultValue="Parks"
          floatingLabelText="Last Name"
        />
        <TextField
          defaultValue="dparks@boysandgirlsclub.org"
          floatingLabelText="Email Address"
        />
        <TextField
          defaultValue="Boys & Girls Club Indianapolis"
          floatingLabelText="Organization Name"
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

export default YourAccount
