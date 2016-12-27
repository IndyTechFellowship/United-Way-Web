import React, { Component } from 'react'

import ProfessionalExperienceContent from '/imports/ui/views/users/professionalExperience/ProfessionalExperienceContent'

class ProfessionalExperience extends Component {

  render() {

    let ProfessionalExperienceList = testInfo.map((item) => {
      return <ProfessionalExperienceContent key={item.id} info={item} />
    })

    return (
      <div style={listStyle}>
        {ProfessionalExperienceList}
      </div>
    )
  }
}

const listStyle = {
  display: 'flex',
  flexDirection: 'column'
}

const testInfo = [
  {
    id: 1,
    logoUrl: 'http://placehold.it/140x100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus sem nisi, tristique ullamcorper eros rhoncus eu. Donec malesuada placerat nibh, quis dignissim nibh scelerisque at',
    title: 'Professional',
    company: 'Adidas Inc',
    time: 'I\'ll format the date later',
  },
  {
    id: 2,
    logoUrl: 'http://placehold.it/140x100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus sem nisi, tristique ullamcorper eros rhoncus eu. Donec malesuada placerat nibh, quis dignissim nibh scelerisque at',
    title: 'Professional',
    company: 'Adidas Inc',
    time: 'I\'ll format the date later',
  },
  {
    id: 3,
    logoUrl: 'http://placehold.it/140x100',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus sem nisi, tristique ullamcorper eros rhoncus eu. Donec malesuada placerat nibh, quis dignissim nibh scelerisque at',
    title: 'Professional',
    company: 'Adidas Inc',
    time: 'I\'ll format the date later',
  },
]

export default ProfessionalExperience