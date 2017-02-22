import React, { PropTypes } from 'react'

import Loading from '/imports/ui/components/Loading'
import Position from '/imports/ui/views/positions/Position'

const PositionsList = ({ loading, positions, organization }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
        <div>
          {positions.map((p) => {
            return (
              <div key={p._id}>
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

export default PositionsList
