import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class CreateAnAccountLogin extends Component {
  render() {
    return (
      <div style={container}>
        <div style={leftSide}>
          <TextField
            hintText="First Name"
            floatingLabelText="First Name" />
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name" />
          <TextField
            hintText="Email"
            floatingLabelText="Email" />
        </div>
        <div style={rightSide}>
          <TextField
            hintText="Password"
            floatingLabelText="Password" />
          <TextField
            hintText="Confirm Password"
            floatingLabelText="Confirm Password" />
          <div>
            <span style={text}>I agree to the Terms and Privacy</span>
            <RaisedButton 
              label="Sign Up"
              style={signUpButton} />
          </div>
        </div>
      </div>
    )
  }
}

const leftSide = {
  display: 'flex',
  flexDirection: 'column',
  margin: 4
}

const rightSide = {
  display: 'flex',
  flexDirection: 'column',
  margin: 4
}

const container = {
  display: 'flex',
  flexDirection: 'row'
}

const signUpButton = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

const text = {
  margin: 4
}