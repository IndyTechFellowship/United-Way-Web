import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

export default class EmailPasswordLogin extends Component {
  render() {
    return (
      <div style={loginStyle}>
        <TextField
          hintText="Email"
          floatingLabelText="Email" />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password" />
        <FlatButton
          style={forgotPasswordButtonStyle}
          label="Forgot Password" />
        <div style={loginCheckButtonStyle} >
          <Checkbox
            label="Remember Me"
            style={checkboxStyle} />
          <RaisedButton 
            label="Login" 
            style={loginButtonStyle} />
        </div>
      </div>
    )
  }
}

const loginStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const forgotPasswordButtonStyle = {

}

const loginCheckButtonStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center'
}

const loginButtonStyle = {

}

const checkboxStyle = {
  width: '65%'
}