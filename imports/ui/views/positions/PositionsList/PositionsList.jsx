import React, { PropTypes } from 'react'

import Loading from '/imports/ui/components/Loading'
import PositionPosting from '/imports/ui/views/positions/PositionPosting'

const PositionsList = ({ loading, positions }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
        <div>
          {positions.map((p) => {
            return (
              <div key={p._id}>
                <PositionPosting position={p}/>
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
}

export default PositionsList
