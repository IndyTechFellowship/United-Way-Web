import React, { Component } from 'react'
import { connect } from 'react-redux'

import Navbar from '/imports/new-ui/components/Navbar'
import Footer from '/imports/new-ui/components/Footer'
import { setSigninDialogOpen } from '/imports/new-ui/state'
import SigninDialog from '/imports/new-ui/components/SigninDialog'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isUserLoggedIn: Meteor.user() != null,
      showLoginModal: false
    }
    this.onUserButtonClicked = this.onUserButtonClicked.bind(this)
    this.onUserLoggedIn = this.onUserLoggedIn.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar />
        <div style={styles.container}>
          <div style={styles.content}>
            { this.props.children }
          </div>
          <SigninDialog />
        </div>
        <Footer />
      </div>
    )
  }

  onUserButtonClicked() {
    console.log("On User Button Clicked")
    this.setState({
      showLoginModal: Meteor.user() == null
    })
  }
  
  onUserLoggedIn() {
    console.log("On User Logged In triggered")
    this.setState({
      isUserLoggedIn: true,
      showLoginModal: false
    })
  }
  
  onUserLoggedOut() {
    console.log("On User logged out triggered")
    this.setState({
      isUserLoggedIn: false
    })
  }

}

const mapStateToProps = ({ signin }) => ({
  signinDialogOpen: signin.dialogOpen,
});

const mapDispatchToProps = (dispatch) => ({
  openSigninDialog: () => dispatch(setSigninDialogOpen(true)),
  closeSigninDialog: () => dispatch(setSinginDialogOpen(false)),
})

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  content: {
    flexGrow: '1'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);