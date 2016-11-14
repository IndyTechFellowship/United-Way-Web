import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

// route components
import AboutPage from '/imports/ui/pages/AboutPage'
import AppContainer from '/imports/ui/containers/AppContainer'
import HomePage from '/imports/ui/pages/HomePage'
import LoginPage from '/imports/ui/pages/LoginPage'
import NotFoundPage from '/imports/ui/pages/NotFoundPage'
import OrganizationPage from '/imports/ui/pages/organizations/OrganizationPage'
import OrganizationsPage from '/imports/ui/pages/organizations/OrganizationsPage'
import PositionPage from '/imports/ui/pages/organizations/positions/PositionPage'
import SearchPage from '/imports/ui/pages/SearchPage'
import SettingsPage from '/imports/ui/pages/SettingsPage'
import UserPage from '/imports/ui/pages/users/UserPage'
import UsersPage from '/imports/ui/pages/users/UsersPage'

export const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="login" component={LoginPage}/>
      <Route path="organizations/">
        <IndexRoute component={OrganizationsPage}/>
        <Route path=":id" component={OrganizationPage}/>
        <Route path=":org_id/positions/:id" component={PositionPage}/>
      </Route>
      <Route path="search" component={SearchPage}/>
      <Route path="settings" component={SettingsPage}/>
      <Route path="users/">
        <IndexRoute component={UsersPage}/>
        <Route path=":id" component={UserPage}/>
      </Route>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>
);
