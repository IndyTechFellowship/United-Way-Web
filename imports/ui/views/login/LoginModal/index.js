import React, { Component } from 'react'
import Modal from 'react-modal'

import EmailPasswordLogin from '/imports/ui/views/login/LoginModal/EmailPasswordLogin.jsx'
import SSOButtons from '/imports/ui/views/login/SsoButtons.jsx'
import CreateAnAccountLogin from '/imports/ui/views/login/LoginModal/CreateAnAccountLogin.jsx'
import { Meteor } from 'meteor/meteor'
import { browserHistory } from 'react-router'

export default class LoginModal extends Component {
  constructor(props) {
    super(props)
    let isUserLoggedIn = Meteor.userId != null
    this.state = {
      modalOpen: isUserLoggedIn,
    }
  }

  closeModal() {
    console.log("Close")
    this.setState({
      modalOpen: false
    })
    browserHistory.push('/')
  }

  openModal() {
    console.log("Open")
    this.setState({
      modalOpen: true
    })
  }

  render() {
    return (
      <Modal
        isOpen={this.state.modalOpen}
        contentLabel="Login/Register" 
        style={loginModal} >
          <div style={center}>
            <span style={bigHeader}>Let's get you to your account</span>
            <div style={topLogin}>
              <EmailPasswordLogin closeModal={this.closeModal.bind(this)} />
              <div style={divider} />
              <SSOButtons />
            </div>
            <div style={bigHeader}>Oh, you don't have an account yet?</div>
            <div style={smallHeader}>Create your account to start showing and sharing your interests</div>
            <CreateAnAccountLogin closeModal={this.closeModal.bind(this)} />
          </div>
      </Modal>
    )
  }
}

const loginModal = {
  content: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  },
}

const center = {
  width: '95%',
  margin: '0 auto'
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
}

const smallHeader = {
  fontSize: 16,
  alignItems: 'center',
}