import React, { Component } from 'react'
import ProfessionalExperienceLogo from './ProfessionalExperienceLogo.jsx'
import ProfessionalExperienceHeader from './ProfessionalExperienceHeader'
import ProfessionalExperienceDescription from './ProfessionalExperienceDescription'

class ProfessionalExperienceContent extends Component {
  render() {

    let info = this.props.info

    return (
      <div style={contentStyle}>
        <div style={topStyle} >
          <ProfessionalExperienceLogo logoUrl={info.logoUrl} />
          <ProfessionalExperienceHeader 
            title={info.title} 
            company={info.company} 
            time={info.time} 
            />
        </div>
        <div>
          <ProfessionalExperienceDescription description={info.description} />
        </div>
      </div>
    )
  }
}

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
}

const topStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export default ProfessionalExperienceContent