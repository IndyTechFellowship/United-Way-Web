import _ from 'lodash'
import { get } from 'lodash';
import { createContainer } from 'meteor/react-meteor-data';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { Button, Icon, Intent, Menu, MenuItem, MenuDivider, NonIdealState, Popover, Position } from '@blueprintjs/core'

import { Notifications } from '/imports/api/Notifications'
import { Organizations } from '/imports/api/Organizations';
import {
  signoutUser,
} from '/imports/new-ui/state'
import { CloudinaryTransformToAvatar } from '/imports/helpers/images';

class NotificationsMenu extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
    }
    this.popoverWillClose = this.popoverWillClose.bind(this)
  }

  popoverWillClose() {
    Meteor.call('Notifications.view', _.filter(this.props.notifications, { viewed: false }), (err, resp) => {
    })
  }

  render() {
    const { notifications } = this.props
    const unreadNotifications = _.filter(notifications, { viewed: false })
    return (
      <Popover position={Position.BOTTOM} popoverWillClose={this.popoverWillClose}>
        <div style={styles.container}>
          <Button
            style={styles.link}
            intent={Intent.PRIMARY}
            className="pt-minimal"
            iconName="notifications"
          />
          {
            unreadNotifications.length === 0
              ? null
              : <div style={styles.badge}></div>
          }
        </div>
        <Menu>
          {
            notifications.length === 0
              ? <div style={styles.empty}>
                  You don't have any notifications.
                </div>
              : notifications.map((notification, index) => (
                  <div key={notification._id} style={styles.notification(notification.viewed, index === notifications.length-1)}>
                    <Button
                      intent={Intent.PRIMARY}
                      className="pt-minimal"
                      onClick={() => browserHistory.push(notification.path)}
                      style={styles.button}
                    >
                      {notification.title}
                    </Button>
                  </div>
                ))
          }
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

  goToActivity() {
    browserHistory.push('/activity')
  }

}

const styles = {
  link: {
    color: 'white',
    fontSize: '16px'
  },
  empty: {
    margin: '16px',
    display: 'flex',
    alignItems: 'center'
  },
  badge: {
    position: 'absolute',
    top: '4px',
    right: '4px',
    background: '#F55656',
    borderRadius: '50%',
    height: '8px',
    width: '8px'
  },
  container: {
    position: 'relative'
  },
  notification: (viewed, last) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    width: '300px',
    fontWeight: viewed ? 'normal' : 'bold',
    cursor: 'pointer',
    borderBottom: last ? null : '1px solid #CED9E0'
  }),
  button: {
    textAlign: 'left',
    lineHeight: '1.5',
    display: 'flex',
    alignItems: 'center'
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
  const subs = [
    Meteor.subscribe('Notifications.get', {})
  ]
  if (_.some(subs, (s) => !s.ready())) return { notifications: [] }
  const notifications = Notifications.find({ _id: { $in: currentUser.profile.notifications || [] } }, { sort: { at: -1 } }).fetch()
  return { notifications }
}, NotificationsMenu));