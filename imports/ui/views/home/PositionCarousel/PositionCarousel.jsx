import React, { Component, PropTypes } from 'react'

import Carousel from '/imports/ui/components/Carousel'
import Loading from '/imports/ui/components/Loading'
import Position from '/imports/ui/views/positions/Position'

const PositionCarousel = ({ loading, positions }) => {
    if (loading) {
      return <Loading/>
    } else {
      let positionCards = positions.map((p) => {
        return (
            <div key={p._id} style={styles.position}>
              <Position position={p} />
            </div>
        )
      })

      return <Carousel cards={positionCards}/>
    }
}

PositionCarousel.propTypes = {
  loading: PropTypes.bool.isRequired,
  positions: PropTypes.array.isRequired,
}

const styles = {
  position: {
    flexBasis: '50%',
  }
}

export default PositionCarousel