import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import {
  Divider,
  FlatButton,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui'
import Person from 'material-ui/svg-icons/action/account-circle'

export default class UserProfileMenu extends Component {
  render() {
    return (
      <IconMenu
          iconButtonElement={<IconButton onClick={this.handleProfileClicked}><Person style={styles.iconStyles} /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
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
    width: '90px'
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
}