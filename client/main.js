import { Meteor } from 'meteor/meteor'
import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { Routes } from '/imports/startup/client/routes'

injectTapEventPlugin();

Meteor.startup(() => {
  render(<Routes />, document.getElementById('app'));
})
