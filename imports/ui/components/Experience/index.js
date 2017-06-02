import React, { Component } from 'react'
import moment from 'moment'

import CardComponent from '/imports/ui/components/CardComponent'
import ExperienceLogo from '/imports/ui/components/Experience/ExperienceLogo'
import ExperienceHeader from './ExperienceHeader'
import ExperienceDescription from './ExperienceDescription'

class Experience extends Component {

  render() {

    const { experience } = this.props

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

    return (
      <CardComponent
        imageUrl={null}
        name={experience.companyName}
        title={experience.title}
        subtitle={experience.location}
        body={body}
        cardType="experience"
        cardButtons={ExperienceButtons}
        drawerContent={experience.description}
      />
    )
  }

}

const styles = {
  experience: {
    paddingBottom: '10px',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  }
}

export default Experience

class ExperienceButtons extends Component {
  render() {
    return null
  }
}