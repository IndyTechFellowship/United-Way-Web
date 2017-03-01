import React, { Component } from 'react'

import { Meteor } from 'meteor/meteor'

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

    this.validate = this.validate.bind(this)
  }

  render() {
    return (
      <div style={loginStyle}>
        <TextField
          hintText="Email"
          floatingLabelText="Email"
          errorText={this.state.emailErrorText}
          onChange={this.emailChange.bind(this)} />
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password" 
          errorText={this.state.passwordErrorText}
          onChange={this.passwordChange.bind(this)} />
        <FlatButton
          style={forgotPasswordButtonStyle}
          label="Forgot Password"
          onClick={this.forgotPasswordClicked.bind(this)} />
        <div style={loginCheckButtonStyle} >
          <Checkbox
            label="Remember Me"
            style={checkboxStyle}
            onCheck={this.rememberChecked.bind(this)} />
          <RaisedButton 
            label="Login" 
            style={loginButtonStyle}
            onClick={this.emailLogin.bind(this)} />
        </div>
      </div>
    )
  }

  forgotPasswordClicked() {
    console.log("Sorry, this feature isn't available")
  }

  emailChange(event, value) {
    this.setState({
      email: value
    })
  }

  passwordChange(event, value) {
    this.setState({
      password: value
    })
  }

  rememberChecked(event, isChecked) {
    this.setState({
      remember: isChecked
    })
  }

  emailLogin() {
    let email = this.state.email
    let password = this.state.password
    let remember = this.state.remember
    if (this.validate(email, password)) {
      Meteor.loginWithPassword(email, password, (error) => {
        if (error) {
          console.log("Login error: " + error)
        } else {
          console.log("Login Successful")
          this.props.closeModal()
        }
      })
    } else {
      console.log("Validation Failed")
    }
  }

  validate(email, password) {
    let valid = true
    if (email === undefined || email.length == 0) {
      valid = false
      this.setState({
        emailErrorText: "Email is required"
      })
    }
    if (password === undefined || password.length == 0) {
      valid = false
      this.setState({
        passwordErrorText: "Password is required"
      })
    }
    if (valid) {
      this.setState({
        emailErrorText: "",
        passwordErrorText: ""
      })
    }
    return valid
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