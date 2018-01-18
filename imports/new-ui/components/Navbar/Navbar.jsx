import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'

import {
  setUserSearchResults,
  updateUserSearchResults,
  setSearchCategoriesOpen,
  setSigninDialogOpen,
} from '/imports/new-ui/state'
import UserMenu from './UserMenu'
import SearchBox from './SearchBox'

const Navbar = (props) => {
  const {
    currentUser,
    dispatch,
    searchLoading,
    searchTerm,
    isUserLoggedIn,
    onUserButtonClicked,
    openSigninDialog,
  } = props

  return (
    <nav className="pt-navbar" style={styles.nav}>
      <div style={styles.container}>
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading" style={styles.heading}><Link to="/" style={styles.link}>Board Serve Indy</Link></div>
          <SearchBox />
        </div>
        <div className="pt-navbar-group pt-align-right navlinks">
          <Link to="/"><button className="pt-button pt-minimal" style={styles.link}>Home</button></Link>
          <Link className="about" to="/about"><button className="pt-button pt-minimal" style={styles.link}>About</button></Link>
          <Link to="/positions"><button className="pt-button pt-minimal" style={styles.link}>Positions</button></Link>
          <Link to="/organizations"><button className="pt-button pt-minimal" style={styles.link}>Organizations</button></Link>
          <Link to="/volunteers"><button className="pt-button pt-minimal" style={styles.link}>Volunteers</button></Link>
          <span className="pt-navbar-divider" style={styles.divider}></span>
          <div className='user'>
            {!!currentUser
              ? <UserMenu />
              : <button onClick={openSigninDialog} className="pt-button pt-minimal" style={styles.link}>Login</button>
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    background: '#0E5A8A',
    color: 'white'
  },
  heading: {
    fontFamily: 'Pacifico'
  },
  container: {
    width: '960px',
    margin: 'auto',
    fontFamily: 'Itim'
  },
  link: {
    color: 'white',
    fontSize: '16px'
  },
  divider: {
    borderColor: 'rgba(255,255,255,.5)'
  }
}

const mapStateToProps = ({ search, user }) => ({
  currentUser: user.currentUser,
  searchLoading: search.searchResultsLoading,
  searchTerm: search.searchTerm,
})

const mapDispatchToProps = (dispatch) => ({
  openSigninDialog: () => dispatch(setSigninDialogOpen(true)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)