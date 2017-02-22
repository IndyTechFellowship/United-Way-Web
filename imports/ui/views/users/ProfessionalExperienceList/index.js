import React, { Component } from 'react'

import Experience from '/imports/ui/components/Experience'
import Title from '/imports/ui/components/Title'

class ProfessionalExperienceList extends Component {

  render() {

    let professionalExperienceList = this.props.experiences.map((experience) => {
      return <Experience key={experience._id} experience={experience} />
    })

    return (
      <div style={listStyle}>
        <Title>Professional Experience</Title>
        <div style={listStyle}>
          { professionalExperienceList }
        </div>
      </div>
    )
  }
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column'
}

export default ProfessionalExperienceList
