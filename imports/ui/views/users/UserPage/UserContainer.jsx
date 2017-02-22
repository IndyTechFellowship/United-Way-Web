import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'

import { Experiences } from '/imports/api/Experiences'
import { Users } from '/imports/api/Users'
import { Tags } from '/imports/api/Tags'
import UserPage from './UserPage'

const UserContainer = createContainer((props) => {
  // get organization
  const query = {_id: props.params.id}
  const userHandle = Meteor.subscribe('Users.get', query)
  if (!userHandle.ready()) return { loading: true, user: {} }
  let user = Users.findOne(query)

  // get tags
  const tagsHandle = Meteor.subscribe('Tags.get', { _id: { $in: user.profile.interests.concat(user.profile.skills) } })
  if (!tagsHandle.ready()) return { loading: true, user: {} }

  // get experiences
  const experiencesHandle = Meteor.subscribe('Experiences.get', { _id: { $in: user.profile.volunteerExperiences.concat(user.profile.professionalExperiences) } })
  if (!experiencesHandle.ready()) return { loading: true, user: {} }

  // update organization with tag objects
  user.profile = Object.assign(user.profile, {
    interests: Tags.find({ _id: { $in: user.profile.interests } }).fetch(),
    skills: Tags.find({ _id: { $in: user.profile.skills } }).fetch(),
    volunteerExperiences: Experiences.find({ _id: { $in: user.profile.volunteerExperiences } }).fetch(),
    professionalExperiences: Experiences.find({ _id: { $in: user.profile.professionalExperiences } }).fetch()
  })

  // render
  return { loading: false, user: user.profile }
}, UserPage)

UserContainer.propTypes = {
  id: PropTypes.number
}

export default UserContainer
