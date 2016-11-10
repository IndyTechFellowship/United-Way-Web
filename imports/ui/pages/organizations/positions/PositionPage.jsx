import React, { Component } from 'react'

class PositionPage extends Component {

  render() {
    return (<div>Organization { this.props.params.org_id }, Position { this.props.params.id }</div>)
  }

}

export default PositionPage
