import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Carousel from '/imports/ui/components/Carousel'
import Loading from '/imports/ui/components/Loading'
import OrganizationCard from '/imports/ui/views/organizations/OrganizationCard'

const OrganizationCarousel = ({ loading, organizations }) => {
    if (loading) {
      return <Loading/>
    } else {
      if (organizations.length > 0) {
        let organizationCards = organizations.map((organization, index) => {
          return (
              <div key={organization._id} style={styles.organization}>
                <div style={styles[index%2 ? 'right' : 'left']}>
                  <Link to={`/organizations/${organization._id}`} style={styles.link} key={organization._id}>
                    <OrganizationCard organization={organization} />
                  </Link>
                </div>
              </div>
          )
        })
        return <Carousel cards={organizationCards}/>
      } else {
        return <div style={styles.empty}>No Organizations</div>
      }
    }
}

OrganizationCarousel.propTypes = {
  loading: PropTypes.bool.isRequired,
  organizations: PropTypes.array.isRequired,
}

const styles = {
  organization: {
    flexBasis: '50%',
  },
  left: {
    marginRight: '8px'
  },
  right: {
    marginLeft: '8px'
  },
  link: {
    textDecoration: 'none'
  },
  empty: {
    fontSize: '24px',
    color: '#9b9b9b',
    width: '100%',
    padding: '48px 0',
    textAlign: 'center'
  }
}

export default OrganizationCarousel
