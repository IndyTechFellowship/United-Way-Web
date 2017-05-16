import React, { Component } from 'react'
import { deepOrange500, grey200 } from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Footer from '/imports/ui/components/Footer'
import Navbar from '/imports/ui/components/Navbar'

const styles = {
  pageWrapper: {
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    alignItems: "center",
    background: grey200,
  },
  content: {
    flex: 1,
    width: "80%",
    maxWidth: 1440,
  },
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
})

class App extends Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar />
          <div style={styles.pageWrapper}>
            <div style={styles.content}>{ this.props.children }</div>
            <Footer />
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

}

export default App
