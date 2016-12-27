import React, { Component } from 'react'

import EmailPasswordLogin from '/imports/ui/views/login/LoginModal/EmailPasswordLogin.jsx'
import SocialLogin from '/imports/ui/views/login/LoginModal/SocialLogin.js'
import CreateAnAccountLogin from '/imports/ui/views/login/LoginModal/CreateAnAccountLogin.jsx'

export default class LoginModal extends Component {
    render() {
        return (
            <div style={loginModal}>
              <h1 style={center}>Let's get to yo account</h1>
              <div style={topLogin}>
                <EmailPasswordLogin />
                <div style={divider} />
                <SocialLogin />
              </div>
              <h1>Oh, you ain't got an account yet?</h1>
              <h6>Waddup! Create yo account to start showin and sharin yo interests</h6>
              <CreateAnAccountLogin />
            </div>
        )
    }
}

const loginModal = {
  display: 'flex',
  flexDirection: 'column',
  flexGrow: '1'
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

const center = {
  alignItems: 'center'
}