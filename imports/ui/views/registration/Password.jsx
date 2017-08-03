import TextField from 'material-ui/TextField'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setOnboardingField } from '/imports/ui/state'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
}

const Password = ({ dispatch, password1, password2 }) => (
  <div style={styles.container}>
    <div>
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
  </div>
)

const mapStateToProps = ({ onboarding }) => ({
  password1: onboarding.password1,
  password2: onboarding.password2,
})

export default connect(mapStateToProps)(Password)