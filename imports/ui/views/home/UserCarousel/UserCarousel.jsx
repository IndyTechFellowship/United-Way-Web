import React, { Component, PropTypes } from 'react'

import Carousel from '/imports/ui/components/Carousel'
import Loading from '/imports/ui/components/Loading'
import UserCard from '/imports/ui/views/users/UserCard'

const UserCarousel = ({ loading, users }) => {
    if (loading) {
      return <Loading/>
    } else {
      let userCards = users.map((u) => {
        return (
            <div key={u._id} style={styles.user}>
              <UserCard user={u.profile} />
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
  }
}

export default UserCarousel
