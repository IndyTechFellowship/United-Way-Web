import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'

import { Experiences } from '/imports/api/Experiences'
import { Users } from '/imports/api/Users'
import { Tags } from '/imports/api/Tags'
import VolunteerPage from './VolunteerPage'

const VolunteerPageContainer = createContainer((props) => {
  // get organization
  const query = {_id: props.params.id}
  const volunteerHandle = Meteor.subscribe('Users.get', query)
  if (!volunteerHandle.ready()) return { loading: true, volunteer: {} }
  let volunteer = Users.findOne(query)

  // get tags and positions
  const subs = [
    Meteor.subscribe('Experiences.get', {}),
    Meteor.subscribe('Tags.get', {}),
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, volunteer: {} }


  // update volunteer with tag objects
  volunteer.profile = Object.assign(volunteer.profile, {
    skills: Tags.find({ _id: { $in: volunteer.profile.skills || [] } }).fetch(),
    interests: Tags.find({ _id: { $in: volunteer.profile.interests || [] } }).fetch(),
    volunteerExperiences: Experiences.find({ _id: { $in: volunteer.profile.volunteerExperiences || [] } }).fetch(),
    professionalExperiences: Experiences.find({ _id: { $in: volunteer.profile.professionalExperiences || [] } }).fetch()
  })

  //determine if this is the user's profile
  let userId = Meteor.userId()
  let isThisMe = userId === volunteer._id

  // render
  return { loading: false, volunteer: volunteer, tags: Tags.find().fetch(), isMe: isThisMe }
}, VolunteerPage)

VolunteerPageContainer.propTypes = {
  id: PropTypes.number
}

export default VolunteerPageContainer