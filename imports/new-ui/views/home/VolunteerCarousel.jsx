import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'

import Loader from '/imports/new-ui/components/Loader'
import { Tags } from '/imports/api/Tags'
import { Users } from '/imports/api/Users'
import Volunteer from '/imports/new-ui/components/Volunteers/Volunteer'

class VolunteerCarousel extends Component {

  render() {
    const { loading, volunteers } = this.props
    if (loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div style={styles.container}>
          {
            volunteers.map(volunteer => <Volunteer key={volunteer._id} volunteer={volunteer} />)
          }
        </div>
      )
    }
  }
}

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  }
}

export default createContainer(() => {
  // get tags and experiences
  const subs = [
    Meteor.subscribe('Users.get', {}),
    Meteor.subscribe('Tags.get', {}),
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, volunteers: [] }

  let volunteers = _.take(_.shuffle(Users.find().fetch()), 4)
  if (volunteers.length % 2 != 0) {
    volunteers = _.dropRight(volunteers)
  }
  volunteers.map(volunteer => {
    volunteer.profile = Object.assign(volunteer.profile, {
      skills: Tags.find({ _id: { $in: volunteer.profile.skills || [] } }).fetch()
    })
    return volunteer
  })

  return { loading: false, volunteers: volunteers }
}, VolunteerCarousel)