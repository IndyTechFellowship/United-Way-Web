import React, { Component } from 'react'
import { deepOrange500 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginModal from '/imports/ui/views/login/LoginModal'

import Footer from '/imports/ui/components/Footer'
import Navbar from '/imports/ui/components/Navbar'

const styles = {
  pageWrapper: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    flex: 1,
    width: "80%",
    maxWidth: 970,
  },
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showLoginModal: this.props.isUserLoggedIn,
      isUserLoggedIn: this.props.isUserLoggedIn
    }
    this.onUserButtonClicked = this.onUserButtonClicked.bind(this)
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar isUserLoggedIn={this.state.isUserLoggedIn} onUserButtonClicked={this.onUserButtonClicked} />
          <div style={styles.pageWrapper}>
            <div style={styles.content}>{ this.props.children }</div>
            <Footer />
          </div>
          <LoginModal isShown={this.state.showLoginModal} />
        </div>
      </MuiThemeProvider>
    )
  }

  onUserButtonClicked() {
    this.setState({
      showLoginModal: Meteor.user() == null,
      isUserLoggedIn: Meteor.user() != null
    })
  }


}

export default App
