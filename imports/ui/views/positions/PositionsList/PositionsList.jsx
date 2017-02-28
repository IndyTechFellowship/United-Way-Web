import React, { PropTypes } from 'react'

import Loading from '/imports/ui/components/Loading'
import Position from '/imports/ui/views/positions/Position'

const PositionsList = ({ loading, positions, organization }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
        <div style={styles.twoColumnLayout}>
          {positions.map((p) => {
            return (
              <div key={p._id} style={styles.position}>
                <Position position={p} organization={organization}/>
              </div>
            )
          })}
        </div>
    )
  }
}

PositionsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  positions: PropTypes.array.isRequired,
  organization: PropTypes.object.isRequired,
}

const styles = {
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  position: {
    flexBasis: '50%',
  }
}

export default PositionsList
