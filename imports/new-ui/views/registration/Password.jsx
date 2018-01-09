import { Col } from 'jsxstyle'
import TextField from 'material-ui/TextField'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setOnboardingField } from '/imports/new-ui/state'

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

const Password = ({ dispatch, password1, password2 }) => (
  <Col style={styles.container}>
    <div style={styles.header}>
      <div>Your Password</div>
      <div style={styles.subtitle}>Please create a secure password below. At least 8 characters in length.</div>
    </div>
    <TextField
      floatingLabelText="Password"
      onChange={(e, v) => dispatch(setOnboardingField('password1', v))}
      type="password"
      value={password1}
    />
    <TextField
      floatingLabelText="Confirm Password"
      onChange={(e, v) => dispatch(setOnboardingField('password2', v))}
      type="password"
      value={password2}
    />
  </Col>
)

const mapStateToProps = ({ onboarding }) => ({
  password1: onboarding.password1,
  password2: onboarding.password2,
})

export default connect(mapStateToProps)(Password)