import { Col } from 'jsxstyle'
import TextField from 'material-ui/TextField'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setOnboardingField } from '/imports/ui/state'

const styles = {
  container: {
  },
  header: {
    fontSize: '32px',
    fontWeight: '300',
  },
  subtitle: {
    fontSize: '16px',
    marginTop: '8px'
  }
}

const YourAccount = ({ dispatch, email, firstName, lastName, organizationName }) => (
  <Col style={styles.container}>
    <div style={styles.header}>
      <div>Your Account</div>
      <div style={styles.subtitle}>Please fill out the fields below to setup your account.</div>
    </div>
    <TextField
      floatingLabelText="First Name"
      onChange={(e, v) => dispatch(setOnboardingField('firstName', v))}
      value={firstName}
    />
    <TextField
      floatingLabelText="Last Name"
      onChange={(e, v) => dispatch(setOnboardingField('lastName', v))}
      value={lastName}
    />
    <TextField
      floatingLabelText="Email Address"
      onChange={(e, v) => dispatch(setOnboardingField('email', v))}
      value={email}
    />
  </Col>
);

YourAccount.propTypes = {
  dispatch: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  organizationName: PropTypes.string.isRequired,
}

const mapStateToProps = ({ onboarding }) => ({
  email: onboarding.email,
  firstName: onboarding.firstName,
  lastName: onboarding.lastName,
  organizationName: onboarding.organizationName,
})

export default connect(mapStateToProps)(YourAccount)
