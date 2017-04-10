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
      showNavbar: false
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar />
          <div style={styles.pageWrapper}>
            <div style={styles.content}>{ this.props.children }</div>
            <Footer />
          </div>
          <LoginModal isShown={this.state.showNavbar} />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
