import { Meteor } from 'meteor/meteor'
import React from 'react'
import PropTypes from 'prop-types'
import { createContainer } from 'meteor/react-meteor-data'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

import { Organizations } from '/imports/api/Organizations'

const QuickActions = props => {
  return (
    <div style={styles.container}>
      <div style={styles.columnOne}>
        {props.adminCompany ? <div style={styles.button}><Link to={`/organizations/${props.adminCompany._id}`}><RaisedButton label="View / Edit My Organization's Profile" fullWidth={true} primary={true} /></Link></div> : null}
        <div style={styles.button}><Link to={`/users/${Meteor.userId()}`}><RaisedButton label="View / Edit My Volunteer Profile" fullWidth={true} primary={true} /></Link></div>
        <div style={styles.button}><Link to="/settings"><RaisedButton label="Change My Password" fullWidth={true} primary={true} /></Link></div>
      </div>
      <div style={styles.columnTwo}>
        <div style={styles.button}><Link to="/positions"><RaisedButton label="Browse Positions" fullWidth={true} primary={true} /></Link></div>
        <div style={styles.button}><Link to="/organizations"><RaisedButton label="Browse Organizations" fullWidth={true} primary={true} /></Link></div>
        <div style={styles.button}><Link to="/users"><RaisedButton label="Browse Volunteers" fullWidth={true} primary={true} /></Link></div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    width: '100%',
  },
  columnOne: {
    flexBasis: '50%',
    marginLeft: '32px',
    marginRight: '8px'
  },
  columnTwo: {
    marginLeft: '8px',
    marginRight: '32px',
    flexBasis: '50%'
  },
  button: {
    margin: '8px 0'
  }
}

export default connect()(createContainer((props) => {
  const currentUser = Meteor.userId()
  Meteor.subscribe('Organizations.thatUserAdmins', currentUser);
  const orgsTheyAdmin = Organizations.find({
    admins: currentUser,
  }).fetch();
  if (orgsTheyAdmin.length > 0) {
    const { _id, name } = orgsTheyAdmin[0]
    return {
      adminCompany: { _id, name },
    };
  } else {
    return {};
  }
}, QuickActions));