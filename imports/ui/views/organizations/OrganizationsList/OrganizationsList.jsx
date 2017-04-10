import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Loading from '/imports/ui/components/Loading'
import OrganizationCard from '/imports/ui/views/organizations/OrganizationCard'

// And this is the presentational component.
const OrganizationsList = ({ loading, organizations }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <div style={styles.twoColumnLayout}>
        {organizations.map((o) => {
          return (
            <Link to={`/organizations/${o._id}`} style={styles.organization} key={o._id}>
              <OrganizationCard organization={o} />
            </Link>
          )
        })}
      </div>
    )
  }
}

OrganizationsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  organizations: PropTypes.array.isRequired,
}

const styles = {
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  organization: {
    flexBasis: '50%',
    textDecoration: 'none',
  }
}

export default OrganizationsList
