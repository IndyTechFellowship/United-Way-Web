import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from '/imports/ui/components/App'

injectTapEventPlugin();

class AppContainer extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <App children={ this.props.children } />
      </MuiThemeProvider>
    )
  }

}

export default AppContainer
