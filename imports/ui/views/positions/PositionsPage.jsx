import React, { Component } from 'react'

import Content from '/imports/ui/components/Content'
import PositionsList from '/imports/ui/views/positions/PositionsList'

class PositionsPage extends Component {
  render() {
    let positionsQuery = {}

    return <Content><PositionsList query={positionsQuery} /></Content>
  }
}

export default PositionsPage
