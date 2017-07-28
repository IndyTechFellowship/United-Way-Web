import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Loading from '/imports/ui/components/Loading'
import OrganizationCard from '/imports/ui/views/organizations/OrganizationCard'
import Title from '/imports/ui/components/Title'

// And this is the presentational component.
const OrganizationsList = ({ loading, organizations }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <div style={styles.container}>
        <Title>Organizations</Title>
        <div style={styles.twoColumnLayout}>
          {organizations.map((organization, index) => {
            return (
              <div style={styles.column}>
                <div style={styles[index%2 ? 'right' : 'left']}>
                  <Link to={`/organizations/${organization._id}`} style={styles.organization} key={organization._id}>
                    <OrganizationCard organization={organization} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

OrganizationsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  organizations: PropTypes.array.isRequired,
}

const styles = {
  container: {
    margin: '32px 0'
  },
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  organization: {
    textDecoration: 'none'
  },
  column: {
    flexBasis: '50%'
  },
  left: {
    marginRight: '8px'
  },
  right: {
    marginLeft: '8px'
  }
}

export default OrganizationsList
