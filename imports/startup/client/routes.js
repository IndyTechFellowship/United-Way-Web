import React from 'react'
import { Provider } from 'react-redux'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

// route components
import AppContainer from '/imports/new-ui/components/AppContainer'
import HomePage from '/imports/new-ui/views/home/HomePage'
import AboutPage from '/imports/new-ui/views/about/AboutPage'
import ActivityPage from '/imports/new-ui/views/activity/ActivityPage'
import InvitePage from '/imports/new-ui/views/invite/InvitePage'
import PositionsPage from '/imports/new-ui/views/positions/PositionsPage'
import OrganizationsPage from '/imports/new-ui/views/organizations/OrganizationsPage'
import OrganizationPage from '/imports/new-ui/views/organizations/OrganizationPage'
import RegistrationPage from '/imports/new-ui/views/registration/RegistrationPage'
import SettingsPage from '/imports/new-ui/views/settings/SettingsPage'
import WelcomePage from '/imports/new-ui/views/welcome/WelcomePage'
import VolunteersPage from '/imports/new-ui/views/volunteers/VolunteersPage'
import VolunteerPage from '/imports/new-ui/views/volunteers/VolunteerPage'

import { store } from '/imports/new-ui/state'

export const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="positions" component={PositionsPage} />
        <Route path="organizations">
          <IndexRoute component={OrganizationsPage} />
          <Route path=":id" component={OrganizationPage} />
        </Route>
        <Route path="volunteers">
          <IndexRoute component={VolunteersPage} />
          <Route path=":id" component={VolunteerPage} />
        </Route>
        <Route path="activity" component={ActivityPage} />
        <Route path="settings" component={SettingsPage} />
        <Route path="register" component={RegistrationPage} />
        <Route path="invite" component={InvitePage} />
        <Route path="welcome" component={WelcomePage} />
      </Route>
    </Router>
  </Provider>
);
