import _ from 'lodash'
import React, {Component} from 'react'
import { RaisedButton } from 'material-ui'

import EditButton from '/imports/ui/components/EditButton'
import Experience from '/imports/ui/components/Experience'
import Title from '/imports/ui/components/Title'

class VolunteerExperienceList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      experiences: this.props.experiences,
      numberOfNewExperiences: 0
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.updateExperience = this.updateExperience.bind(this)
    this.addExperience = this.addExperience.bind(this)
    this.deleteExperience = this.deleteExperience.bind(this)
  }

  edit() {
    this.setState({ isEditing: true })
  }

  save() {
    this.setState({ isEditing: false })
    _.each(this.state.experiences, (experience) => {
      if (!_.includes(experience._id, 'new-')) {
        Meteor.call('Experience.update', experience, (err, resp) => {})
      } else {
        Meteor.call('Experience.insert', experience, (err, resp) => {
          let user = _.cloneDeep(this.props.user)
          user.profile.volunteerExperiences.push({ _id: resp })
          Meteor.call('User.update', user, (err, resp => {}))
        })
      }
    })
  }

  updateExperience(id, field, value) {
    let experiences = _.cloneDeep(this.state.experiences)
    let experience = _.find(experiences, { _id: id })
    experience[field] = value
    this.setState({
      experiences
    })
  }

  addExperience() {
    let experiences = this.state.experiences
    experiences.push({
      _id: `new-${this.state.numberOfNewExperiences}`,
      companyName: "",
      title: "",
      startDate: null,
      endDate: null,
      description: "",
      tags: []
    })
    this.setState({
      experiences,
      numberOfNewExperiences: this.state.numberOfNewExperiences+1
    })
  }

  deleteExperience(id) {
    let experiences = this.state.experiences
    const experience = _.remove(experiences, { _id: id })
    this.setState({
      experiences
    })
    if (!_.includes(id, 'new-')) {
      let user = this.props.user
      _.remove(this.props.user.profile.volunteerExperiences, id)
      Meteor.call('Experience.delete', id, (err, resp) => {})
      Meteor.call('User.update', this.props.user, (err, resp => {}))
    }
  }

  render() {
    let volunteerExperienceList = null
    if (this.state.experiences.length > 0) {
      volunteerExperienceList = _.reverse(this.state.experiences.map((item) => {
        return (
          <Experience 
            key={item._id}
            experience={item}
            isEditing={this.state.isEditing}
            updateExperience={this.updateExperience}
            deleteExperience={this.deleteExperience}
          />
        )
      }))
    } else {
      volunteerExperienceList = <div style={styles.empty}>No Volunteer Experiences Added</div>
    }

    const addExperienceButton = <RaisedButton label="Add Volunteer Experience" fullWidth={true} onClick={this.addExperience} />

    return (
        <div style={styles.listContainer}>
          <Title>Volunteer Experience</Title>
          {this.props.editable ?
            <EditButton
              isEditing={this.state.isEditing}
              edit={this.edit}
              save={this.save}
            />
          : null
          }
          <div style={styles.listContainer}>
            { this.state.isEditing ? addExperienceButton : null}
            { volunteerExperienceList }
          </div>
        </div>
    )
  }
}

const styles = {
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '10px',
    position: 'relative'
  },
  empty: {
    fontSize: '24px',
    color: '#9b9b9b',
    width: '100%',
    padding: '48px 0',
    textAlign: 'center'
  }
}

export default VolunteerExperienceList
