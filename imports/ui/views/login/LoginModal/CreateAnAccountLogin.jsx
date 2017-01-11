import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export default class CreateAnAccountLogin extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: ''
    }

    this.validate = this.validate.bind(this)
    this.isUndefinedOrEmpty = this.isUndefinedOrEmpty.bind(this)
  }

  render() {
    return (
      <div style={container}>
        <div style={leftSide}>
          <TextField
            hintText="First Name"
            floatingLabelText="First Name"
            errorText={this.state.firstNameError}
            onChange={this.onFirstNameChanged.bind(this)} />
          <TextField
            hintText="Last Name"
            floatingLabelText="Last Name"
            errorText={this.state.lastNameError}
            onChange={this.onLastNameChanged.bind(this)} />
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            errorText={this.state.emailError}
            onChange={this.onEmailChanged.bind(this)} />
        </div>
        <div style={rightSide}>
          <TextField
            hintText="Password"
            floatingLabelText="Password"
            errorText={this.state.passwordError}
            onChange={this.onPasswordChanged.bind(this)} />
          <TextField
            hintText="Confirm Password"
            floatingLabelText="Confirm Password" 
            errorText={this.state.confirmPasswordError}
            onChange={this.onConfirmPasswordChanged.bind(this)} />
          <div>
            <span style={text}>I agree to the Terms and Privacy</span>
            <RaisedButton 
              label="Sign Up"
              style={signUpButton}
              onClick={this.onRegisterClicked.bind(this)} />
          </div>
        </div>
      </div>
    )
  }

  onFirstNameChanged(event, value) {
    this.setState({
      firstName: value
    })
  }

  onLastNameChanged(event, value) {
    this.setState({
      lastName: value
    })
  }

  onEmailChanged(event, value) {
    this.setState({
      email: value
    })
  }

  onPasswordChanged(event, value) {
    this.setState({
      password: value
    })
  }

  onConfirmPasswordChanged(event, value) {
    this.setState({
      confirmPassword: value
    })
  }

  onRegisterClicked() {
    this.validate()
    console.log(this.state)
  }

  validate() {
    let firstName = this.state.firstName
    let lastName = this.state.lastName
    let email = this.state.email
    let password = this.state.password
    let confirmPassword = this.state.confirmPassword
    let valid = true

    

    valid = this.isUndefinedOrEmpty(firstName, "firstNameError") || 
            this.isUndefinedOrEmpty(lastName, "lastNameError") ||
            this.isUndefinedOrEmpty(email, "emailError") ||
            this.isUndefinedOrEmpty(password, "passwordError") || 
            this.isUndefinedOrEmpty(confirmPassword, "confirmPasswordError")



  }

  isUndefinedOrEmpty(value, error) {
    let result = value.length == 0 || value === undefined
    let obj = {}

    if (result) {
      obj[error] = 'This value is required'
    } else {
      obj[error] = ''
    }
    this.setState(obj)
    return result
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