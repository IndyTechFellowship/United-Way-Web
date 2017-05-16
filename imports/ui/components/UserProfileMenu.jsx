import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import {
  Divider,
  FlatButton,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui'
import { lightBlue800 } from 'material-ui/styles/colors'
import Person from 'material-ui/svg-icons/action/account-circle'

export default class UserProfileMenu extends Component {
  render() {
    return (
      <IconMenu
          iconButtonElement={<div style={styles.roundButton}>Login</div>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        <MenuItem >
          <div style={styles.iconMenuViewProfileContainer}>
            <div style={styles.iconMenuItemContainer}>
              <IconButton><Person style={styles.iconStyles}/></IconButton>
            </div>
            <div style={styles.iconMenuItemContainer}>
              <div>Name</div>
              <div>Email</div>
              <FlatButton>View Profile</FlatButton>
            </div>
          </div>
        </MenuItem>
        <Divider/>
        <MenuItem primaryText="Edit Profile" />
        <MenuItem primaryText="View Organization Profile - Admin Only?" />
        <MenuItem primaryText="Edit Organization Profile - Admin Only?" />
        <MenuItem primaryText="Account Settings" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    )
  }

  handleProfileClicked() {
    browserHistory.push('/login')
  }
}

const styles = {
  iconStyles: {
    height: '48px',
    width: '48px',
    margin: '16px 24px',
  },

  iconMenuViewProfileContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  iconMenuItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  roundButton: {
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
}
