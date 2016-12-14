import React, { Component } from 'react'

class ProfessionalExperienceDescription extends Component {
  render() {
    return (
      <div>
        {this.props.description}
      </div>
    )
  }
}

const descriptionStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export default ProfessionalExperienceDescription