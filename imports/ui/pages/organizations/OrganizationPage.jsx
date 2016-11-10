import React, { Component } from 'react'

class OrganizationPage extends Component {

  render() {
    return (<div>Organization { this.props.params.id }</div>)
  }

}

export default OrganizationPage
