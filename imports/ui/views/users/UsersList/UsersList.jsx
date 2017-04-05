import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Loading from '/imports/ui/components/Loading'
import UserCard from '/imports/ui/views/users/UserCard'

// And this is the presentational component.
const UsersList = ({ loading, selectedUser, users }) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <div style={styles.twoColumnLayout}>
        {users.map((u) => {
          return (
            <Link to={`/users/${u._id}`} style={styles.user} key={u._id}>
              <UserCard user={u.profile} />
            </Link>
          )
        })}
      </div>
    )
  }
}

const styles = {
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    flexBasis: '50%',
    textDecoration: 'none',
  }
}

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  selectedUser: PropTypes.string,
  users: PropTypes.array.isRequired,
}

export default UsersList
