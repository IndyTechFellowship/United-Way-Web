import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin';
import { connect } from 'react-redux'

import App from '/imports/ui/components/App'
import {
  setCurrentUser,
} from '/imports/ui/state'
import ScrollToTop from '/imports/ui/components/ScrollToTop'

class AppContainer extends Component {

  componentWillReceiveProps(newProps) {
    const { dispatch, meteorUser, reduxUser } = newProps
    if (!_.isEqual(meteorUser, reduxUser)) {
      dispatch(setCurrentUser(meteorUser))
    }
  }

  render() {
    return (
      <ScrollToTop>
        <App children={ this.props.children } />
      </ScrollToTop>
    )
  }
}

AppContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  meteorUser: PropTypes.object,
  reduxUser: PropTypes.object,
}

const mapStateToProps = ({ user }) => ({
  reduxUser: user.currentUser,
})

export default connect(mapStateToProps)(createContainer(() => {
  const meteorUser = Meteor.user()
  return { meteorUser }
}, AppContainer))
