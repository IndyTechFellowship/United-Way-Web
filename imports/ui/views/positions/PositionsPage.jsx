import React, { Component } from 'react'

import PositionsList from '/imports/ui/views/positions/PositionsList'

class PositionsPage extends Component {
  render() {
    let positionsQuery = {}

    return <PositionsList query={positionsQuery} />
  }
}

export default PositionsPage
