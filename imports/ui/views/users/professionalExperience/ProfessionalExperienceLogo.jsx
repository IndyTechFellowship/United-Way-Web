import React, { Component } from 'react'

class ProfessionalExperienceLogo extends Component {
  
  render() {
    return (
      <div>
        <img src={this.props.logoUrl} style={logoStyle} />
      </div>
    )
  }
}

const logoStyle = {
  width: '100px'
}

export default ProfessionalExperienceLogo