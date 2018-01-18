import React from 'react';
import Slider from 'react-slick'
import { Link } from 'react-router'
import { Button, Dialog, Intent, Tooltip } from '@blueprintjs/core'
import Joyride from 'react-joyride'

import PositionCarousel from './PositionCarousel'
import OrganizationCarousel from './OrganizationCarousel'
import VolunteerCarousel from './VolunteerCarousel'

export default class HomePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showOverlay: !!this.props.location.query.tour,
      runTour: false
    }
    this.toggleOverlay = this.toggleOverlay.bind(this)
    this.tourState = this.tourCallback.bind(this)
  }

  toggleOverlay() {
    this.setState({
      showOverlay: false,
      runTour: true
    })
  }

  tourCallback(tourState) {
    if (tourState.type === 'step:before' && (tourState.index === 4 || tourState.index === 5 || tourState.index === 6)) {
      window.scrollTo(0, 0)
    }
  }

  render() {
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
        <div style={styles.images} className='banner'>
          <Slider {...settings} style={styles.slider}>
            <div style={styles.banner('boardserveindy-banner.jpg')}>
              <div style={styles.bannerBG}>
                <div style={styles.content}>
                  <div style={styles.header} className="title">Board Serve Indy</div>
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
        <div style={styles.content} className="content">
          <br />
          <br />
          <div style={styles.carousel} className="positions">
            <h2>Featured Positions</h2>
            <PositionCarousel />
            <div style={styles.actions}>
              <Tooltip content="Browse and search positions" hoverOpenDelay={200}>
                <Link to="/positions"><Button intent={Intent.PRIMARY} text="See More Positions" rightIconName="pt-icon-arrow-right" /></Link>
              </Tooltip>
            </div>
          </div>
          <div style={styles.carousel} className="organizations">
            <h2>Featured Organizations</h2>
            <OrganizationCarousel />
            <div style={styles.actions}>
              <Tooltip content="Browse and search organizations" hoverOpenDelay={200}>
                <Link to="/organizations"><Button intent={Intent.PRIMARY} text="See More Organizations" rightIconName="pt-icon-arrow-right" /></Link>
              </Tooltip>
            </div>
          </div>
          <div style={styles.carousel} className="volunteers">
            <h2>Featured Volunteers</h2>
            <VolunteerCarousel />
            <div style={styles.actions}>
              <Tooltip content="Browse and search volunteers" hoverOpenDelay={200}>
                <Link to="/volunteers"><Button intent={Intent.PRIMARY} text="See More Volunteers" rightIconName="pt-icon-arrow-right" /></Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <Joyride
          type="continuous"
          showStepsProgress={true}
          showSkipButton={true}
          scrollToFirstStep={true}
          ref="joyride"
          autoStart={true}
          callback={this.tourCallback}
          locale={{ back: 'Back', close: 'Close', last: 'Finish', next: 'Next', skip: 'Skip' }}
          steps={[
            {
              title: 'Volunteers, Organizations, and Positions',
              text: 'BoardServeIndy is split into three categories: Volunteers, Organizations, and Positions.',
              selector: '.content',
              style: {
                mainColor: '#48AFF0'
              }
            },
            {
              title: 'Volunteers',
              text: <div><p>Volunteers are users who are looking for volunteer opportunities to be on a non-profit committee or board. They have profiles that showcase their interests and experience. Every user on the site, even organization administrators, can make a volunteer profile.</p><p><b>Clicking on a Volunteer card will open his/her profile.</b></p></div>,
              selector: '.volunteers',
              style: {
                mainColor: '#48AFF0'
              }
            },
            {
              title: 'Organizations',
              text: <div><p>Organizations are mission-aligned non-profits that have been invited to use the site. These organizations each have a profile that showcases what the organization is all about. Volunteers can browse organizations to see what might interest them.</p><p><b>Clicking on an Organization card will open its profile.</b></p></div>,
              selector: '.organizations',
              style: {
                mainColor: '#48AFF0'
              }
            },
            {
              title: 'Positions',
              text: <div><p>An organization can add positions to their profile for any committee or board positions they have available. An organization administrator may also reach out to any volunteers they think would be a good fit for a position.</p><p><b>Clicking on a Position card to will give you more information about the position and allow you to tell the organization you are interested or recommend a volunteer for the position.</b></p></div>,
              selector: '.positions',
              style: {
                mainColor: '#48AFF0'
              }
            },
            {
              title: 'Navigation',
              text: 'From any page on the site, you can return to the homepage, read about the site, or browse volunteers, organizations, or positions by clicking on the corresponding link in the navigation.',
              selector: '.navlinks',
              position: 'bottom',
              style: {
                mainColor: '#48AFF0'
              }
            },
            {
              title: 'Search',
              text: 'You can also search volunteers, organizations, and positions using the search field.',
              selector: '.search',
              style: {
                mainColor: '#48AFF0'
              }
            },
            {
              title: 'Your Account',
              text: 'Click on your name in the corner to edit your profile, edit your organizations (if you are an organization administrator), change your password, or logout.',
              selector: '.user',
              position: 'bottom',
              style: {
                mainColor: '#48AFF0'
              }
            }
          ]}
          run={this.state.runTour}
        />
        <Dialog isOpen={this.state.showOverlay} onClose={this.toggleOverlay}>
          <div style={styles.overlay}>
            <div className="pt-dialog-body">
              <h2>Welcome to BoardServeIndy!</h2>
              <span>Would you like to take a quick tour of the site?</span>
            </div>
            <div className="pt-dialog-footer">
              <div className="pt-dialog-footer-actions">
                <Button className="pt-large" text="Skip" onClick={() => this.setState({ showOverlay: false })} />
                <Button className="pt-large" text="Take Tour" rightIconName="arrow-right" intent={Intent.PRIMARY} onClick={this.toggleOverlay} />
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }

}

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
  },
  overlay: {
    margin: '20px'
  }
}