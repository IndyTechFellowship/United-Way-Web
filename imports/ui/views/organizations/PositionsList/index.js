import React, {Component} from 'react'

import PositionPosting from './PositionPosting'

class PositionsList extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    let positionsList = this.props.positions.map((position) => {
      return <PositionPosting position={position}/>
    });

    return (
      <div style={styles.positionContainer}>
        <h1>Posted Position</h1>

        {positionsList}
      </div>
    )
  }
}

const styles = {
  positionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
}

export default PositionsList