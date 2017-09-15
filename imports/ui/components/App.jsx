import {
  lightBlue400,
  lightBlue800,
  blue400,
  orange400,
  grey100,
  grey200,
  grey700,
  red200,
  red500,
} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Footer from '/imports/ui/components/Footer'
import Navbar from '/imports/ui/components/Navbar'
import { setSigninDialogOpen } from '/imports/ui/state'
import SigninDialog from '/imports/ui/views/signin/SigninDialog'

const styles = {
  pageWrapper: {
    display: "flex",
    minHeight: "100vh",
    width: '100%',
    flexDirection: "column",
    background: '#f9f9f9',
  }
}

const muiTheme = getMuiTheme({
  palette: {
    darkGrey: '#616161',
    lightGrey: '#E0E0E0',
    mediumGrey: '#9E9E9E',
    ultraLightGrey: '#FAFAFA',
    white: '#FFFFFF',
    primary: lightBlue800,
    primaryLight: lightBlue400,
    primaryDark: blue400,
    primaryText: grey100,
    primaryTextLight: grey200,
    secondary: '#f44336',
    secondaryText: grey100,
    error: '#f44336',
    errorLight: red200,
  },
})

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
    const {
      closeSigninDialog,
      openSigninDialog,
      signinDialogOpen,
    } = this.props;
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar />
          <div style={styles.pageWrapper}>
            { this.props.children }
            <Footer />
          </div>
          <SigninDialog />
        </div>
      </MuiThemeProvider>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
