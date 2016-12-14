import React, { Component } from 'react'

class ProfessionalExperienceHeader extends Component {
  render() {
    return (
      <div>
        <div>{this.props.professionalExperience.title}</div>
        <div>{this.props.professionalExperience.company}</div>
        <div>{this.props.professionalExperience.time}</div>
      </div>
    )
  }
}

export default ProfessionalExperienceHeader