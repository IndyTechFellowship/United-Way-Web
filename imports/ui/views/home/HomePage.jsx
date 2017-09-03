import React, { Component } from 'react'

import Carousel from '/imports/ui/components/Carousel'
import Title from '/imports/ui/components/Title'
import OrganizationCarousel from '/imports/ui/views/home/OrganizationCarousel'
import PositionCarousel from '/imports/ui/views/home/PositionCarousel'
import Slider from 'react-slick'
import UserCarousel from '/imports/ui/views/home/UserCarousel'

class HomePage extends Component {

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500
    }

    return (
      <div>
        <div style={styles.images}>
          <Slider {...settings} style={styles.slider}>
            <div><img src="volunteers-banner.png"  style={styles.img} /></div>
            <div><img src="positions-banner.png" style={styles.img} /></div>
            <div><img src="organizations-banner.png" style={styles.img} /></div>
          </Slider>
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
    width: '100%'
  },
  title: {
    marginTop: '32px',
    marginBottom: '16px',
  },
  opportunityLabel: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '12px'
  },
  slider: {
    width: '100%'
  },
  img: {
    width: '100%'
  }
}

export default HomePage
