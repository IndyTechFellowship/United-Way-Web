import React, { Component } from 'react'

import EmailPasswordLogin from '/imports/ui/views/login/LoginModal/EmailPasswordLogin.jsx'
import SocialLogin from '/imports/ui/views/login/LoginModal/SocialLogin.js'
import CreateAnAccountLogin from '/imports/ui/views/login/LoginModal/CreateAnAccountLogin.jsx'

export default class LoginModal extends Component {
    render() {
        return (
            <div style={loginModal}>
              <span style={bigHeader}>Let's get to yo account</span>
              <div style={topLogin}>
                <EmailPasswordLogin />
                <div style={divider} />
                <SocialLogin />
              </div>
              <span style={bigHeader}>Oh, you ain't got an account yet?</span>
              <span style={smallHeader}>Waddup! Create yo account to start showin and sharin yo interests</span>
              <CreateAnAccountLogin />
            </div>
        )
    }
}

const loginModal = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1',
}

const topLogin = {
  display: 'flex',
  flexDirection: 'row'
}

const divider = {
  width: 2,
  margin: 15,
  background: 'grey',
}

const bigHeader = {
  fontSize: 32,
  alignItems: 'center'
}

const smallHeader = {
  fontSize: 20,
  alignItems: 'center'
}