import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'

import { Tags } from '/imports/api/Tags'
import TagPicker from './TagPicker'

const TagPickerContainer = createContainer((props) => {
  // get tags
  const tagsHandle = Meteor.subscribe('Tags.get', {})
  if (!tagsHandle.ready()) return { loading: true, tags: {} }

  // render
  return { loading: false, tags: Tags.find().fetch() }
}, TagPicker)

export default TagPickerContainer