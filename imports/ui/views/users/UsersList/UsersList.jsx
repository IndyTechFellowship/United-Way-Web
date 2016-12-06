import { CircularProgress } from 'material-ui'
import React, { PropTypes } from 'react'

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
    console.log(users)
    if (loading) {
        return <CircularProgress /> 
    } else {
        return <div>
            {users.map((u) => {
                const style = { ...styles.firstName, ...(selectedUser === u._id ? styles.selected : {}) }
                return (
                    <div key={u._id} style={style}>
                        {u.profile.firstName}
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