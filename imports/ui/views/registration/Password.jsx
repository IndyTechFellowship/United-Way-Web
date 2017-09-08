import { Col } from 'jsxstyle'
import TextField from 'material-ui/TextField'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setOnboardingField } from '/imports/ui/state'

const styles = {
  container: {
    alignItems: 'center',
  },
  header: {
    fontSize: '22px',
    fontWeight: 'bold',
  },
}

const Password = ({ dispatch, password1, password2 }) => (
  <Col style={styles.container}>
    <div style={styles.header}>
      Create A Secure Password
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