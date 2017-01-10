import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'

import { Organizations } from '/imports/api/Organizations'
import OrganizationsList from './OrganizationsList'

// This is an example react component to show off how to use the UsersContainer.
// Without redux, state containers will generally need to be full ES6 class
// react components.
class OrganizationsListStateContainer extends Component {

    render() {
        return <OrganizationsList { ...this.props } />
    }

}

// In general, I follow the following rules:
// Let's say you have ComponentA which renders ComponentB which renders ComponentC.
// ComponentB should only define propTypes for the things it specifically needs
// to function. It shouldn't attempt to worry about the props its children (ComponentC) need.
// Instead, it should always just do { ...this.props } in addition to
// providing any props it should provide to ComponentC. Then ComponentC has its
// own proptypes that it will enforce.
// As long as you are dilligent about always defining proptypes, this will always work.
OrganizationsListStateContainer.propTypes = {

}

export default createContainer(() => {
    const query = {}
    const handle = Meteor.subscribe('Organizations.get', query)
    if (!handle.ready()) return { loading: true, users: [] }
    else return { loading: false, organizations: Organizations.find({}).fetch() }
}, OrganizationsListStateContainer)
