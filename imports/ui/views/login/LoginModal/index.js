import React, { Component } from 'react'
import Modal from 'react-modal'

import EmailPasswordLogin from '/imports/ui/views/login/LoginModal/EmailPasswordLogin.jsx'
import SocialLogin from '/imports/ui/views/login/LoginModal/SocialLogin.js'
import CreateAnAccountLogin from '/imports/ui/views/login/LoginModal/CreateAnAccountLogin.jsx'

export default class LoginModal extends Component {
    render() {
        return (
            <Modal
              isOpen={true}
              contentLabel="Login/Register" 
              style={loginModal} >
              <span style={bigHeader}>Let's get to yo account</span>
              <div style={topLogin}>
                <EmailPasswordLogin />
                <div style={divider} />
                <SocialLogin />
              </div>
              <div style={bigHeader}>Oh, you ain't got an account yet?</div>
              <div style={smallHeader}>Waddup! Create yo account to start showin and sharin yo interests</div>
              <CreateAnAccountLogin />
            </Modal>
        )
    }
}

const loginModal = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
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