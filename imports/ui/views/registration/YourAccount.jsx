import TextField from 'material-ui/TextField'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { setOnboardingField } from '/imports/ui/state'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
}

const YourAccount = ({ dispatch, email, firstName, lastName, organizationName }) => (
  <div style={styles.container}>
    <div>
      Confirm Or Edit Your Account Information
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
    <TextField
      floatingLabelText="Organization Name"
      onChange={(e, v) => dispatch(setOnboardingField('organizationName', v))}
      value={organizationName}
    />
  </div>
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
