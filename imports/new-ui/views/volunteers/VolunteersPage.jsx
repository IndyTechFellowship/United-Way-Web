import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import Loader from '/imports/new-ui/components/Loader'
import { Tags } from '/imports/api/Tags'
import { Users } from '/imports/api/Users'
import Volunteer from '/imports/new-ui/components/Volunteers/Volunteer'

class VolunteersPage extends Component {

  render() {
    const { loading, volunteers } = this.props
    if (loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div style={styles.content}>
          <div style={styles.volunteers}>
            <h2>Volunteers</h2>
            <div style={styles.container}>
              {
                volunteers.map(volunteer => <Volunteer key={volunteer._id} volunteer={volunteer} />)
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
  volunteers: {
    margin: '40px 0'
  }
}

export default createContainer(() => {
  // get tags and experiences
  const subs = [
    Meteor.subscribe('Users.get', {}),
    Meteor.subscribe('Tags.get', {}),
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, volunteers: [] }

  let volunteers = Users.find().fetch()
  volunteers.map(volunteer => {
    volunteer.profile = Object.assign(volunteer.profile, {
      skills: Tags.find({ _id: { $in: volunteer.profile.skills || [] } }).fetch()
    })
    return volunteer
  })

  return { loading: false, volunteers: volunteers }
}, VolunteersPage)