import React, { PropTypes } from 'react'

import Loading from '/imports/ui/components/Loading'
import Position from '/imports/ui/views/positions/Position'
import Title from '/imports/ui/components/Title'

const PositionsList = ({ loading, positions, organization }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <div style={styles.container}>
        <Title>Positions</Title>
        <div style={styles.twoColumnLayout}>
          {positions.map((p, index) => {
            return (
              <div key={p._id} style={styles.position}>
                <div style={styles[index%2 ? 'right' : 'left']}>
                  <Position position={p} organization={organization}/>
                </div>
              </div>
            )
          })}
        </div>
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
  container: {
    margin: '32px 0'
  },
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  position: {
    flexBasis: '50%',
  },
  left: {
    marginRight: '8px'
  },
  right: {
    marginLeft: '8px'
  }
}

export default PositionsList
