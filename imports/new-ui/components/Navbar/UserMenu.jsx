import { get } from 'lodash';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button, Menu, MenuItem, MenuDivider, Popover, Position } from '@blueprintjs/core'

import { Organizations } from '/imports/api/Organizations';
import {
  signoutUser,
} from '/imports/new-ui/state'
import { CloudinaryTransformToAvatar } from '/imports/helpers/images';

class UserMenu extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      userInitials: ""
    }
    this.getAvatar = this.getAvatar.bind(this);
    this.goToOrgProfile = this.goToOrgProfile.bind(this);
    this.goToUserProfile = this.goToUserProfile.bind(this);
  }

  render() {
    const { adminCompany, currentUser: { emails, profile } } = this.props;
    const name = `${profile.firstName} ${profile.lastName}`;
    const email = emails[0].address;
    const imageUri = "http://placehold.it/350x150"
    return (
      <Popover position={Position.BOTTOM}>
        <Button 
          style={styles.link} 
          className="pt-minimal" 
          text={name} 
        />
        <Menu>
          <MenuItem
            text="Go To Your Profile"
            onClick={this.goToUserProfile}
          />
          {adminCompany && <MenuItem
            text={`Go To ${adminCompany.name}`}
            onClick={this.goToOrgProfile}
          />}
          <MenuDivider />
          <MenuItem
            text="Change Password"
            onClick={this.goToSettings}
          />
          <MenuItem
            text="Logout"
            onClick={this.props.signout}
          />
        </Menu>
      </Popover>
    )
  }

  getAvatar(navBar) {
    const avatar = get(this.props, 'currentUser.profile.avatar.original');
    if (avatar) {
      return <img
        src={CloudinaryTransformToAvatar(avatar)}
      />;
    } else {
      const firstName = get(this.props, 'currentUser.profile.firstName');
      const lastName = get(this.props, 'currentUser.profile.lastName');
      return <div>
        {`${firstName.charAt(0)}${lastName.charAt(0)}`}
      </div>;
    }
  }

  getOrgAvatar() {
    return <div>
      LI
    </div>;
  }

  goToUserProfile() {
    const { currentUser: { _id } } = this.props;
    browserHistory.push(`/volunteers/${_id}`);
  }

  goToOrgProfile() {
    const _id = get(this.props, 'adminCompany._id');
    browserHistory.push(`/organizations/${_id}`);
  }

  goToSettings() {
    browserHistory.push('/settings')
  }

}

const styles = {
  link: {
    color: 'white',
    fontSize: '16px'
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(signoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(createContainer((props) => {
  const { currentUser } = props;
  Meteor.subscribe('Organizations.thatUserAdmins', currentUser._id);
  const orgsTheyAdmin = Organizations.find({
    admins: currentUser._id,
  }).fetch();
  if (orgsTheyAdmin.length > 0) {
    const { _id, name } = orgsTheyAdmin[0]
    return {
      adminCompany: { _id, name },
    };
  } else {
    return {};
  }
}, UserMenu));