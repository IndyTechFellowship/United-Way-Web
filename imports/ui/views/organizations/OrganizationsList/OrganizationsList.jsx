import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Loading from '/imports/ui/components/Loading'

// And this is the presentational component.
const OrganizationsList = ({ loading, organizations }) => {
  if (loading) {
    return <Loading />
  } else {
    return <div>
      {organizations.map((o) => {
        return (
          <div key={o._id}>
            <Link to={`/organizations/${o._id}`}>{o.name}</Link>
          </div>
        )
      })}
    </div>
  }
}

OrganizationsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  organizations: PropTypes.array.isRequired,
}

export default OrganizationsList
