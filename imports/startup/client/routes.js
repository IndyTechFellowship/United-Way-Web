import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'

// route components
import AboutPage from '/imports/ui/views/about/AboutPage'
import AppContainer from '/imports/ui/components/AppContainer'
import HomePage from '/imports/ui/views/home/HomePage'
import LoginPage from '/imports/ui/views/login/LoginPage'
import NotFoundPage from '/imports/ui/views/about/NotFoundPage'
import OrganizationPage from '/imports/ui/views/organizations/OrganizationPage'
import OrganizationsPage from '/imports/ui/views/organizations/OrganizationsPage'
import PositionPage from '/imports/ui/views/organizations/positions/PositionPage'
import SearchPage from '/imports/ui/views/search/SearchPage'
import SettingsPage from '/imports/ui/views/settings/SettingsPage'
import UserPage from '/imports/ui/views/users/UserPage'
import UsersPage from '/imports/ui/views/users/UsersPage'

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
