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
  constructor(props) {
    super(props)
    this.state = {
      userInitials: ""
    }
    this.getUserInitials = this.getUserInitials.bind(this)
    this.getPlaceholder = this.getPlaceholder.bind(this)
    this.goToUserProfile = this.goToUserProfile.bind(this)
  }

  render() {
    let profile = Meteor.user().profile
    let name = profile.firstName + " " + profile.lastName
    let email = Meteor.user().emails[0].address
    let imageUri = "http://placehold.it/350x150"
    return (
      <IconMenu
          iconButtonElement={<div style={styles.roundButton}>{this.getPlaceholder()}</div>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}} >
        <MenuItem onClick={this.goToUserProfile}>
          <div style={styles.iconMenuViewProfileContainer}>
            <div style={styles.iconMenuItemContainer}>
              <IconButton><Person style={styles.iconStyles}/></IconButton>
            </div>
            <div style={styles.iconMenuItemContainer}>
              <div>{name}</div>
              <div>{email}</div>
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

  getPlaceholder() {
    let userAvatar = 'https://placehold.it/350x150'; //replace this with an actual user avatar url once all that is setup
    if (userAvatar == undefined) {
      return getUserInitials();
    }
    return <img style={{height: '48px', width: '48px', borderRadius: '50%'}} src={userAvatar} />;
  }

  getUserInitials() {
    let firstName = Meteor.user().profile.firstName
    let lastName = Meteor.user().profile.lastName
    return firstName.charAt(0) + lastName.charAt(0)
  }

  goToUserProfile() {
    browserHistory.push('/users/' + Meteor.userId())
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
