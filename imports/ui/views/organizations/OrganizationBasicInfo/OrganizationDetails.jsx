import React, {Component} from 'react'

class OrganizationDetails extends Component {
  render() {
    return (
      <div>
        <div>{this.props.details.industryType}</div>
        <div>{this.props.details.website}</div>
      </div>
    )
  }
}

export default OrganizationDetails