import React, { Component, PropTypes } from 'react'

import Carousel from '/imports/ui/components/Carousel'
import Loading from '/imports/ui/components/Loading'
import OrganizationCard from '/imports/ui/views/organizations/OrganizationCard'

const OrganizationCarousel = ({ loading, organizations }) => {
    if (loading) {
      return <Loading/>
    } else {
      let organizationCards = organizations.map((o) => {
        return (
            <div key={o._id} style={styles.organization}>
              <OrganizationCard organization={o} />
            </div>
        )
      })

      return <Carousel cards={organizationCards}/>
    }
}

OrganizationCarousel.propTypes = {
  loading: PropTypes.bool.isRequired,
  organizations: PropTypes.array.isRequired,
}

const styles = {
  organization: {
    flexBasis: '50%',
  }
}

export default OrganizationCarousel
