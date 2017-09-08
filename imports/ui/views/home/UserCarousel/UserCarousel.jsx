import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Carousel from '/imports/ui/components/Carousel'
import Loading from '/imports/ui/components/Loading'
import UserCard from '/imports/ui/views/users/UserCard'

const UserCarousel = ({ loading, users }) => {
    if (loading) {
      return <Loading/>
    } else {
      if (users.length > 0) {
        let userCards = users.map((user, index) => {
          user.profile._id = user._id
          return (
              <div key={user._id} style={styles.user}>
                <div style={styles[index%2 ? 'right' : 'left']}>
                  <Link to={`/users/${user._id}`} style={styles.link} key={user._id}>
                    <UserCard user={user.profile} />
                  </Link>
                </div>
              </div>
          )
        })
      } else {
        return <div style={styles.empty}>No Volunteers</div>
      }
    }
}

UserCarousel.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
}

const styles = {
  user: {
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

export default UserCarousel
