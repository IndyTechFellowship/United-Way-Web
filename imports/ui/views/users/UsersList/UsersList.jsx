import _ from 'lodash'
import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Loading from '/imports/ui/components/Loading'
import Title from '/imports/ui/components/Title'
import UserCard from '/imports/ui/views/users/UserCard'

// And this is the presentational component.
const UsersList = ({ loading, users }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <div style={styles.container}>
        <Title>Volunteers</Title>
        <div style={styles.twoColumnLayout}>
          {users.map((user, index) => {
            user.profile._id = user._id
            return (
              <div style={styles.column}>
                <div style={styles[index%2 ? 'right' : 'left']}>
                  <Link to={`/users/${user._id}`} style={styles.user} key={user._id}>
                    <UserCard user={user.profile} />
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

const styles = {
  container: {
    margin: '32px 0'
  },
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
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

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
}

export default UsersList
