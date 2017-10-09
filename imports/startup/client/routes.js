import React from 'react'
import { Provider } from 'react-redux'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

// route components
import AboutPage from '/imports/ui/views/about/AboutPage'
import AppContainer from '/imports/ui/components/AppContainer'
import HomePage from '/imports/ui/views/home/HomePage'
import NotFoundPage from '/imports/ui/views/about/NotFoundPage'
import OrganizationPage from '/imports/ui/views/organizations/OrganizationPage'
import OrganizationsPage from '/imports/ui/views/organizations/OrganizationsPage'
import PositionsPage from '/imports/ui/views/positions/PositionsPage'
import RegistrationPage from '/imports/ui/views/registration/RegistrationPage'
import SettingsPage from '/imports/ui/views/settings/SettingsPage'
import UserPage from '/imports/ui/views/users/UserPage'
import UsersPage from '/imports/ui/views/users/UsersPage'
import PrivacyPolicyPage from '/imports/ui/views/terms/PrivacyPolicyPage'

import { store } from '/imports/ui/state'

export const Routes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HomePage}/>
        <Route path="register" component={RegistrationPage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="positions" component={PositionsPage}/>
        <Route path="organizations">
          <IndexRoute component={OrganizationsPage}/>
          <Route path=":id" component={OrganizationPage}/>
        </Route>
        <Route path="settings" component={SettingsPage}/>
        <Route path="users">
          <IndexRoute component={UsersPage}/>
          <Route path=":id" component={UserPage}/>
        </Route>
        <Route path="privacy_policy" component={PrivacyPolicyPage} />
        <Route path="*" component={NotFoundPage}/>
      </Route>
    </Router>
  </Provider>
);
