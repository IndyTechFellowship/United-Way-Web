import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import Loader from '/imports/new-ui/components/Loader'
import { Tags } from '/imports/api/Tags'
import { Organizations } from '/imports/api/Organizations'
import Organization from '/imports/new-ui/components/Organizations/Organization'

class OrganizationsPage extends Component {

  render() {
    const { loading, organizations } = this.props
    if (loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div style={styles.content}>
          <div style={styles.organizations}>
            <h2>Organizations</h2>
            <div style={styles.container}>
              {
                organizations.map(organization => <Organization key={organization._id} organization={organization} />)
              }
            </div>
          </div>
        </div>
      )
    }
  }
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  },
  organizations: {
    margin: '40px 0'
  }
}

export default createContainer(() => {
  // get tags and experiences
  const subs = [
    Meteor.subscribe('Organizations.get', {}),
    Meteor.subscribe('Tags.get', {}),
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, organizations: [] }

  let organizations = Organizations.find({}, { sort: { name: 1 } }).fetch()
  organizations.map(organization => (
    Object.assign(organization,
      {
        tags: Tags.find({ _id: { $in: organization.tags || [] } }).fetch()
      }
    )
  ))

  return { loading: false, organizations: organizations }
}, OrganizationsPage)