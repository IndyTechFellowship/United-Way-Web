import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import Carousel from '/imports/ui/components/Carousel'
import Loading from '/imports/ui/components/Loading'
import UserCard from '/imports/ui/views/users/UserCard'

const UserCarousel = ({ loading, users }) => {
    if (loading) {
      return <Loading/>
    } else {
      let userCards = users.map((user, index) => {
        user.profile._id = user._id
        return (
            <div key={user._id} style={styles.user}>
              <div style={styles[index%2 ? 'right' : 'left']}>
                {/* TODO: Figure out how to better way to route to user profile. Currently routing on recommend button as well */}
                {/*<Link to={`/users/${user._id}`} style={styles.link} key={user._id}>*/}
                  <UserCard user={user.profile} />
                {/*</Link>*/}
              </div>
            </div>
        )
      })

      return <Carousel cards={userCards}/>
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
  }
}

export default UserCarousel
