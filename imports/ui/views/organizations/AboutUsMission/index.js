import React, { Component } from 'react'

import AboutUsImages from '/imports/ui/views/organizations/AboutUsMission/AboutUsImages'
import Title from '/imports/ui/components/Title'

class AboutUsMission extends Component {
  render() {
    return (
      <div>
        <Title>About Us & Our Mission</Title>
        <AboutUsImages images={this.props.organization.images} />
        <div>
          {this.props.organization.description}
        </div>
      </div>
    )
  }
}

export default AboutUsMission
