import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'

import { Users } from '/imports/api/Users'
import UserPage from './UserPage'

export default createContainer((props) => {
    const query = {_id: props.params.id}
    const handle = Meteor.subscribe('Users.get', query)
    if (!handle.ready()) return { loading: true, user: {} }
    else return { loading: false, user: Users.findOne(query) }
}, UserPage)
