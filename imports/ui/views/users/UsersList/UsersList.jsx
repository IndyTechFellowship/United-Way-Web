import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import Loading from '/imports/ui/components/Loading'

const styles = {
  firstName: {
    color: 'red',
  },
  selected: {
    color: 'blue',
  }
}

// And this is the presentational component.
const UsersList = ({ loading, selectedUser, users }) => {
  if (loading) {
    return <Loading />
  } else {
    return <div>
      {users.map((u) => {
        const style = { ...styles.firstName, ...(selectedUser === u._id ? styles.selected : {}) }
          return (
            <div key={u._id} style={style}>
              <Link to={`/users/${u._id}`}>{u.profile.firstName}</Link>
            </div>
          )
      })}
    </div>
  }
}

UsersList.propTypes = {
  loading: PropTypes.bool.isRequired,
  selectedUser: PropTypes.string,
  users: PropTypes.array.isRequired,
}

export default UsersList
