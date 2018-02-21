import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'

import { Experiences } from '/imports/api/Experiences'
import { Organizations } from '/imports/api/Organizations'
import { Positions } from '/imports/api/Positions'
import { Users } from '/imports/api/Users'
import { Tags } from '/imports/api/Tags'
import VolunteerPage from './VolunteerPage'

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const VolunteerPageContainer = connect(mapStateToProps)(createContainer((props) => {
  // get organization
  const query = {_id: props.params.id}
  const volunteerHandle = Meteor.subscribe('Users.get', query)
  if (!volunteerHandle.ready()) return { loading: true, volunteer: {} }
  let volunteer = Users.findOne(query)

  // get tags and positions
  let subs = [
    Meteor.subscribe('Experiences.get', {}),
    Meteor.subscribe('Tags.get', {}),
    Meteor.subscribe('Positions.get', {})
  ]
  if (props.currentUser) {
    subs.push(Meteor.subscribe('Organizations.thatUserAdmins', props.currentUser._id))
  }
  if (_.some(subs, (s) => !s.ready())) return { currentUser: props.currentUser, loading: true, volunteer: {} }


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

  let organizations = []
  if (userId && props.currentUser) {
    organizations = Organizations.find({ admins: props.currentUser._id }).fetch()
    organizations = organizations.map(organization => (
      Object.assign(organization,
        {
          positions: Positions.find({ _id: { $in: organization.positions || [] } }).fetch()
        }
      )
    ))
  }
  // render
  return { currentUser: props.currentUser, loading: false, volunteer: volunteer, tags: Tags.find().fetch(), isMe: isThisMe, orgsIAdmin: organizations }
}, VolunteerPage))

VolunteerPageContainer.propTypes = {
  id: PropTypes.number
}

export default VolunteerPageContainer