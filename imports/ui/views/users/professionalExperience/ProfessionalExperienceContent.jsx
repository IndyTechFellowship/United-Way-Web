import React, { Comppnent } from 'react'
import ProfessionalExperienceLogo from './ProfessionalExperienceLogo.jsx'
import ProfessionalExperienceHeader from './ProfessionalExperienceHeader'
import ProfessionalExperienceDescription from './ProfessionalExperienceDescription'

class ProfessionalExperienceContent extends Component {
  render() {
    return (
      <div style={styles.contentStyle}>
        <div>
          <ProfessionalExperienceLogo />
          <ProfessionalExperienceHeader />
        </div>
        <div>
          <ProfessionalExperienceDescription />
        </div>
      </div>
    )
  }
}

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
}