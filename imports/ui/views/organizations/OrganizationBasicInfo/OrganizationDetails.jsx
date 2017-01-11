import React, {Component} from 'react'

class OrganizationDetails extends Component {
  render() {
    return (
      <div>
        <div>{this.props.organization.description}</div>
      </div>
    )
  }
}

export default OrganizationDetails
