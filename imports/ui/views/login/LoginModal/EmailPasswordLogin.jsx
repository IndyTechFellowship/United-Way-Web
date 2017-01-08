import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

export default class EmailPasswordLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      remember: false,
      emailErrorText: "",
      passwordErrorText: ""
    }
  }

  render() {
    return (
      <div style={loginStyle}>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          errorText={this.state.emailErrorText}
          onChange={emailChange} />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password" 
          errorText={this.state.passwordErrorText}
          onChange={passwordChange} />
        <FlatButton
          style={forgotPasswordButtonStyle}
          label="Forgot Password" />
        <div style={loginCheckButtonStyle} >
          <Checkbox
            label="Remember Me"
            style={checkboxStyle} />
          <RaisedButton 
            label="Login" 
            style={loginButtonStyle}
            onClick={emailLogin} />
        </div>
      </div>
    )
  }
}

emailChange = (event, value) => {
  this.emailChange.bind(this)
  this.state = {
    email: value
  }
  console.log(this.state.email)
}

passwordChange = (event, value) => {
  this.emailChange.bind(this)
  this.state = {
    password: value
  }
  console.log(this.state.password)
}

const emailLogin = () => {
  let email = this.state.email
  let password = this.state.password
  console.log("email: " + email + " password: " + password)
  if (validate(email, password)) {
    console.log(email, password)
  }
}

const validate = (email, password) => {
  //could probably add a lot more validation methods
  //console.log("Email: ", email.length)
  //console.log("Passowrd: ", password.length)
  return email.length != 0 || password.length != 0
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