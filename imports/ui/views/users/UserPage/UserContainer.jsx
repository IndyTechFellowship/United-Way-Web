import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'
import _ from 'lodash'

import { Experiences } from '/imports/api/Experiences'
import { Users } from '/imports/api/Users'
import { Tags } from '/imports/api/Tags'
import UserPage from './UserPage'

const UserContainer = createContainer((props) => {
  // get user
  const query = {_id: props.params.id}
  const userHandle = Meteor.subscribe('Users.get', query)
  if (!userHandle.ready()) return { loading: true, user: {} }
  let user = Users.findOne(query)

  // get tags and experiences
  const subs = [
    Meteor.subscribe('Tags.get', {}),
    Meteor.subscribe('Experiences.get', { _id: { $in: user.profile.volunteerExperiences.concat(user.profile.professionalExperiences) } })
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, position: {}, organization: {} }

  const volunteerExperiences = Experiences.find({ _id: { $in: user.profile.volunteerExperiences } }).fetch()
  const professionalExperiences = Experiences.find({ _id: { $in: user.profile.professionalExperiences } }).fetch()

  // update organization with tag objects
  user.profile = Object.assign(user.profile, {
    interests: Tags.find({ _id: { $in: user.profile.interests } }).fetch(),
    skills: Tags.find({ _id: { $in: user.profile.skills } }).fetch(),
    volunteerExperiences: _.map(volunteerExperiences, experience => _.merge(experience, {
      tags: Tags.find({ _id: { $in: experience.tags || [] } }).fetch()
    })),
    professionalExperiences: _.map(professionalExperiences, experience => _.merge(experience, {
      tags: Tags.find({ _id: { $in: experience.tags || [] } }).fetch()
    })),
  })

  // render
  return { loading: false, user: user, tags: Tags.find().fetch() }
}, UserPage)

UserContainer.propTypes = {
  id: PropTypes.number
}

export default UserContainer
