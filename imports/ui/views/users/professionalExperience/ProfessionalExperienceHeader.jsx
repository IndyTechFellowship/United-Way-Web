import React, { Component } from 'react'

class ProfessionalExperienceHeader extends Component {
  render() {

    return (
      <div>
        <div>{this.props.title}</div>
        <div>{this.props.company}</div>
        <div>{this.props.time}</div>
      </div>
    )
  }
}

export default ProfessionalExperienceHeader