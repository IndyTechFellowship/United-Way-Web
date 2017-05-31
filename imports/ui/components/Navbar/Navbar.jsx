import { Row } from 'jsxstyle'
import {
  AppBar,
  AutoComplete,
  FlatButton,
  FloatingActionButton,
  FontIcon,
  RaisedButton,
  TextField,
} from 'material-ui'
import Cached from 'material-ui/svg-icons/action/cached'
import SearchIcon from 'material-ui/svg-icons/action/search'
import { lightBlue800 } from 'material-ui/styles/colors'
import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'

import UserProfileMenu from '/imports/ui/components/UserProfileMenu'
import SearchBox from './SearchBox'
import { updateFullTextSearchResults } from '/imports/ui/state'

class Navbar extends Component {
  
  render() {
    const { dispatch, searchLoading } = this.props
    return (
      <div style={toolbarStyle}>
        <div style={toolbarGroup}>
          <img src="logo.svg" style={logoStyle} />
          <Link to={'/'} style={linkStyle}>Opportunities</Link>
          <Link to={'/positions'} style={linkStyle}>Positions</Link>
          <Row style={searchArea}>
            <FloatingActionButton mini={true} onTouchTap={onSearchClick(dispatch)} zDepth={1}>
              {searchLoading ? <Cached /> : <SearchIcon />}
            </FloatingActionButton>
            <SearchBox onSubmit={onSearchClick(dispatch)} />
          </Row>
          <Link to={'/organizations'} style={linkStyle}>Organizations</Link>
          <Link to={'/users'} style={linkStyle}>Volunteers</Link>
          <UserButton isUserLoggedIn={this.props.isUserLoggedIn} onUserButtonClicked={this.props.onUserButtonClicked}/>
        </div>
      </div>
    )
  }
}

class UserButton extends Component {
  render() {
    if (this.props.isUserLoggedIn) {
      return (
        <UserProfileMenu />
      )
    } else {
      return (
        <div style={roundButton} onClick={this.props.onUserButtonClicked}>Login</div>
      )
    }
  }
}

const onSearchClick = (dispatch) => () => {
  dispatch(updateFullTextSearchResults())
  browserHistory.push('/search')
}

const searchArea = {
  alignItems: 'center',
  flexGrow: '1',
  justifyContent: 'center',
}

const searchButton = {
  height: '24px',
}

const toolbarStyle = {
  backgroundColor: lightBlue800,
  width: '100vw',
  boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
}

const toolbarGroup = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}

const logoStyle = {
  display: 'block',
  width: '48px',
  height: '48px',
  margin: '16px 24px',
}

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
  opacity: '0.7',
  fontSize: '18px',
  margin: '16px 24px',
}

const iconStyle = {
  color: 'white',
  marginRight: '4px',
}

const searchFieldStyle = {
  color: 'white',
}

const roundButton = {
  borderRadius: '50%',
  height: '48px',
  width: '48px',
  border: '1px solid white',
  margin: '16px 24px',
  backgroundColor: 'white',
  color: lightBlue800,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
}

const mapStateToProps = ({ search }) => ({
  searchLoading: search.searchResultsLoading,
})

export default connect(mapStateToProps)(Navbar)
