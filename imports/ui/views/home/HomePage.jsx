import React, { Component } from 'react'

import Title from '/imports/ui/components/Title'
import OrganizationCarousel from '/imports/ui/views/home/OrganizationCarousel'
import PositionCarousel from '/imports/ui/views/home/PositionCarousel'
import UserCarousel from '/imports/ui/views/home/UserCarousel'

class HomePage extends Component {

  render() {
    return (
      <div>
        <div style={styles.title}>
          <Title>Organize. Volunteer. Find Your Opportunity.</Title>
        </div>
        <div style={styles.images}>
          <img src="https://unsplash.it/100/160" style={styles.img} />
          <img src="https://unsplash.it/200/150" style={styles.img} />
          <img src="https://unsplash.it/150/200" style={styles.img} />
          <img src="https://unsplash.it/250/175" style={styles.img} />
        </div>
        <div style={styles.images}>
          <img src="https://unsplash.it/125/210" style={styles.img} />
          <img src="https://unsplash.it/220/130" style={styles.img} />
          <img src="https://unsplash.it/200/200" style={styles.img} />
          <img src="https://unsplash.it/125/150" style={styles.img} />
        </div>

        <div style={styles.opportunityLabel}>Positions</div>
        <PositionCarousel />

        <div style={styles.opportunityLabel}>Organizations</div>
        <OrganizationCarousel />

          <div style={styles.opportunityLabel}>Volunteers</div>
          <UserCarousel />
      </div>
    )
  }

}

const styles = {
  images: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  img: {
    margin: '4px',
  },
  title: {
    marginTop: '32px',
    marginBottom: '16px',
  },
  opportunityLabel: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '12px'
  }
}

export default HomePage
