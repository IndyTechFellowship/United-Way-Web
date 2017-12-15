import React from 'react';
import Slider from 'react-slick'
import { Link } from 'react-router'
import { Button, Intent, Tooltip } from '@blueprintjs/core'

import PositionCarousel from './PositionCarousel'
import OrganizationCarousel from './OrganizationCarousel'
import VolunteerCarousel from './VolunteerCarousel'

const HomePage = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 7500
  }

  return (
    <div>
      <div style={styles.images}>
        <Slider {...settings} style={styles.slider}>
          <div style={styles.banner('boardserveindy-banner.jpg')}>
            <div style={styles.bannerBG}>
              <div style={styles.content}>
                <div style={styles.header}>Board Serve Indy</div>
                <div style={styles.subheader}>Welcome to BoardServeIndy, a United Way of Central Indiana initiative launched to increase volunteerism and support<br />mission-aligned nonprofits within Central Indiana.</div>
              </div>
            </div>
          </div>
          <div style={styles.banner('new-volunteers-banner.jpg')}>
            <div style={styles.bannerBG}>
              <div style={styles.contentRight}>
                <div style={styles.header}>Volunteers</div>
                <div style={styles.subheader}>Organizations find hand raisers and game<br />changers to support their work. Volunteers<br />find a way to serve a community and<br />connect their passions.</div>
              </div>
            </div>
          </div>
          <div style={styles.banner('orgs-banner.jpg')}>
            <div style={styles.bannerBG}>
              <div style={styles.content}>
                <div style={styles.header}>Organizations</div>
                <div style={styles.subheader}>Organizations see the collective impact of work being<br />done in Central Indiana. Volunteers see all the<br />organizations they can raise their hand to support.</div>
              </div>
            </div>
          </div>
          <div style={styles.banner('pos-banner.jpg')}>
            <div style={styles.bannerBG}>
              <div style={styles.contentRight}>
                <div style={styles.header}>Positions</div>
                <div style={styles.subheader}>Organizations showcase their needs.<br />Volunteers answer the call to serve.</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div style={styles.content}>
        <br />
        <br />
        <div style={styles.carousel}>
          <h2>Featured Positions</h2>
          <PositionCarousel />
          <div style={styles.actions}>
            <Tooltip content="Browse and search positions" hoverOpenDelay={200}>
              <Link to="/positions"><Button intent={Intent.PRIMARY} text="See More Positions" rightIconName="pt-icon-arrow-right" /></Link>
            </Tooltip>
          </div>
        </div>
        <div style={styles.carousel}>
          <h2>Featured Organizations</h2>
          <OrganizationCarousel />
          <div style={styles.actions}>
            <Tooltip content="Browse and search organizations" hoverOpenDelay={200}>
              <Link to="/organizations"><Button intent={Intent.PRIMARY} text="See More Organizations" rightIconName="pt-icon-arrow-right" /></Link>
            </Tooltip>
          </div>
        </div>
        <div style={styles.carousel}>
          <h2>Featured Volunteers</h2>
          <VolunteerCarousel />
          <div style={styles.actions}>
            <Tooltip content="Browse and search volunteers" hoverOpenDelay={200}>
              <Link to="/users"><Button intent={Intent.PRIMARY} text="See More Volunteers" rightIconName="pt-icon-arrow-right" /></Link>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  images: {
    width: '100%'
  },
  content: {
    width: '960px',
    margin: '0 auto',
  },
  contentRight: {
    width: '960px',
    margin: '0 auto',
    textAlign: 'right'
  },
  slider: {
    width: '100%',
  },
  banner: bgImage => ({
    position: 'relative',
    background: '#48AFF0',
    height: '600px',
    textShadow: '0px 1px 2px rgba(0, 0, 0, 1)',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }),
  bannerBG: {
    background: 'rgba(32,43,51,.5)',
    height: '100%',
    width: '100%',
    padding: '80px 40px 40px 40px',
  },
  header: {
    fontSize: '76px',
    color: 'white',
    fontFamily: 'Pacifico'
  },
  subheader: {
    marginTop: '32px',
    fontSize: '32px',
    color: 'white',
    fontFamily: 'Itim'
  },
  carousel: {
    margin: '10px 0'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '10px'
  }
}

export default HomePage;