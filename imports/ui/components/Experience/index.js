import _ from 'lodash'
import React, { Component } from 'react'
import moment from 'moment'
import { Card, CardText, DatePicker, RaisedButton, TextField } from 'material-ui'

import CardComponent from '/imports/ui/components/CardComponent'
import EditButton from '/imports/ui/components/EditButton'
import ExperienceLogo from '/imports/ui/components/Experience/ExperienceLogo'
import ExperienceHeader from './ExperienceHeader'
import ExperienceDescription from './ExperienceDescription'

class Experience extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  render() {

    const { experience, isEditing, updateExperience, deleteExperience } = this.props

    let body = {
      leftColumn: [{
        label: 'Start Year - End Year',
        content: `${moment(experience.startDate).format('YYYY')}-${experience.endDate ? moment(experience.endDate).format('YYYY') : 'Present'}`
      }],
      rightColumn: {
        label: 'Search Tags',
        content: "Example, Example, Example, Example"
      }
    }

    const view = (
      <CardComponent
        imageUrl={null}
        name={experience.companyName}
        title={experience.title}
        subtitle={experience.location}
        body={body}
        cardType="experience"
        cardButtons={null}
        drawerContent={experience.description}
      />
    )

    const edit = (
      <div>
        <TextField
          hintText="ex. Salesforce"
          floatingLabelText="Company Name"
          floatingLabelFixed={true}
          value={experience.companyName}
          onChange={e => updateExperience(experience._id, 'companyName', e.target.value)}
          fullWidth={true}
        />
        <TextField
          hintText="ex. Account Executive"
          floatingLabelText="Title"
          floatingLabelFixed={true}
          value={experience.title}
          onChange={e => updateExperience(experience._id, 'title', e.target.value)}
          fullWidth={true}
        />
        <TextField
          hintText="ex. Indianapolis, IN"
          floatingLabelText="Location"
          floatingLabelFixed={true}
          value={experience.location}
          onChange={e => updateExperience(experience._id, 'location', e.target.value)}
          fullWidth={true}
        />
        <div style={styles.date}>
          <DatePicker
            floatingLabelText="Start Date"
            floatingLabelFixed={true}
            hintText="Start Date"
            autoOk={true}
            value={experience.startDate}
            onChange={(e, date) => updateExperience(experience._id, 'startDate', date)}
          />
          <DatePicker
            floatingLabelText="End Date"
            floatingLabelFixed={true}
            hintText="End Date"
            autoOk={true}
            value={experience.endDate}
            onChange={(e, date) => updateExperience(experience._id, 'endDate', date)}
          />
        </div>
        <div>
          <div style={styles.descriptionLabel}>Description</div>
          <textarea style={styles.textarea} value={experience.description} onChange={e => updateExperience(experience._id, 'description', e.target.value)} />
        </div>
        <RaisedButton 
          label="Delete Experience" 
          labelColor='white'
          backgroundColor='#E53935'
          fullWidth={true}
          onClick={e => deleteExperience(experience._id)}
        />
      </div>
    )

    return (
      <div style={styles.card}>
        {isEditing ? edit : view}
      </div>
    )
  }

}

const styles = {
  experience: {
    paddingBottom: '10px'
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    position: 'relative',
    marginBottom: '16px'
  },
  date: {
    display: 'flex'
  },
  descriptionLabel: {
    fontSize: '12px',
    color: 'rgba(0,0,0,.3)',
    margin: '12px 0 4px 0'
  },
  textarea: {
    width: '100%',
    height: '100px',
    fontSize: '14px',
    background: 'transparent',
    borderColor: 'lightgray'
  }
}

export default Experience