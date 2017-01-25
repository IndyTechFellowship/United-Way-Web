import React, { Component } from 'react'
import {
  Toolbar,
  ToolbarGroup,
  RaisedButton,
  FlatButton,
  FontIcon,
  AutoComplete,
  Chip,
  IconButton,
  IconMenu,
  MenuItem,
  Divider
} from 'material-ui'
import Person from 'material-ui/svg-icons/action/account-circle'
import { browserHistory } from 'react-router'

export default class UserProfileMenu extends Component {
  constructor(props) {
    super(props)
  }

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
              <RaisedButton>View Profile</RaisedButton>
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