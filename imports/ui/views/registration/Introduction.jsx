import React from 'react';
import RaisedButton from 'material-ui/RaisedButton'

import { Colors } from '/imports/ui/styles'

const Introduction = (props) => {
  const content = props.organizationName ?
    <div>
      <div style={styles.subtitle}>
        You've been invited to be an organization admin for <b>{organizationName}</b>. 
      </div>
      <div style={styles.description}>
        <div>
          As an organization admin, you'll be responsible for: 
          <ul>
            <li>Setting up and maintaining your organization's profile</li>
            <li>Adding positions your organization has available</li>
            <li>Reaching out to interested volunteers</li>
          </ul>
          We'll help you set up your organization soon, but first we need to create a user account for you.
        </div>
      </div>
    </div>
  : 
  <div>
    <div style={styles.subtitle}>
      You've been invited to create a volunteer profile. 
    </div>
    <div style={styles.description}>
      <div>
        As a volunteer, you'll be able to: 
        <ul>
          <li>Browse organizations</li>
          <li>View and express interest positions</li>
          <li>Share your contact details with organizations</li>
        </ul>
        Click the button below to setup your account.
      </div>
    </div>
  </div>

  return (
    <div style={styles.welcomeContainer}>
      <div style={styles.header}>Welcome to <b>BoardServeIndy!</b></div>
      {content}
      <RaisedButton
        style={styles.getStarted}
        label='Get Started'
        backgroundColor={Colors.primary}
        labelColor={'white'}
        onTouchTap={props.getStarted}
      />
    </div>
  );
};

const styles = {
  welcomeContainer: {
    margin: '24px',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    fontSize: '48px',
    fontWeight: '300',
    color: Colors.primary
  },
  subtitle: {
    fontSize: '32px',
    margin: '8px 0',
    color: Colors.primary
  },
  description: {
    fontSize: '16px',
    margin: '32px',
    color: 'black',
    fontWeight: 'normal'
  },
  getStarted: {
    alignSelf: 'center'
  }
}

export default Introduction;