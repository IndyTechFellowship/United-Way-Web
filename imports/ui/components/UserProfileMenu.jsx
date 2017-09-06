import { get } from 'lodash';
import { Col, Row } from 'jsxstyle';
import {
  Divider,
  FlatButton,
  IconButton,
  IconMenu,
  MenuItem,
} from 'material-ui';
import Person from 'material-ui/svg-icons/action/account-circle'
import { lightBlue800 } from 'material-ui/styles/colors';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Colors } from '/imports/ui/styles';
import {
  signoutUser,
} from '/imports/ui/state'

class UserProfileMenu extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      userInitials: ""
    }
    this.getAvatar = this.getAvatar.bind(this);
    this.goToUserProfile = this.goToUserProfile.bind(this);
  }

  render() {
    const { currentUser: { emails, profile } } = this.props;
    const name = `${profile.firstName} ${profile.lastName}`;
    const email = emails[0].address;
    const imageUri = "http://placehold.it/350x150"
    return (
      <IconMenu
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        iconButtonElement={this.getAvatar(true)}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem onClick={this.goToUserProfile}>
          <Row>
            <Col style={styles.iconContainer}>{this.getAvatar(false)}</Col>
            <Col style={styles.textContainer}>
              <span style={styles.name}>{name}</span>
              <span style={styles.email}>{email}</span>
            </Col>
          </Row>
        </MenuItem>
        <Divider />
        <MenuItem onTouchTap={this.goToSettings} primaryText="Change Password" />
        <MenuItem onTouchTap={this.props.signout} primaryText="Sign Out" />
      </IconMenu>
    )
  }

  getAvatar(navBar) {
    const avatar = get(this.props, 'currentUser.profile.avatar.original');
    if (avatar) {
      return <img
        src={original}
        style={{borderRadius: '50%', height: '48px', width: '48px'}}
      />;
    } else {
      const firstName = get(this.props, 'currentUser.profile.firstName');
      const lastName = get(this.props, 'currentUser.profile.lastName');
      const style = (() => {
        if (navBar) return { ...styles.baseIcon, ...styles.navBarIcon };
        else return { ...styles.baseIcon, ...styles.menuIcon };
      })();
      return <div 
        style={style}>
        {`${firstName.charAt(0)}${lastName.charAt(0)}`}
      </div>;
    }
  }

  goToUserProfile() {
    const { currentUser: { _id } } = this.props;
    browserHistory.push(`/users/${_id}`);
  }

  goToSettings() {
    browserHistory.push('/settings')
  }

}

const styles = {

  name: {
    fontSize: '20px',
    fontWeight: 'bold',
    height: '20px',
  },

  email: {
    fontSize: '14px',
    fontWeight: 'lighter',
    marginLeft: '8px',
  },

  iconStyles: {
    height: '48px',
    width: '48px',
    margin: '16px 24px',
  },

  textContainer: {
    justifyContent: 'center',
  },

  iconContainer: {
    justifyContent: 'center',
  },

  iconMenuItemText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  baseIcon: {
    alignItems: 'center',
    border: '1px solid white',
    borderRadius: '50%',
    display: 'flex',
    fontSize: '12px',
    height: '48px',
    justifyContent: 'center',
    width: '48px',
  },

  navBarIcon: {
    backgroundColor: Colors.white,
    color: 'black',
    margin: '16px 24px',
  },

  menuIcon: {
    backgroundColor: Colors.primary,
    color: 'white',
    marginRight: '12px',
  },

};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileMenu)