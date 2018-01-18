import { Col } from 'jsxstyle'
import TextField from 'material-ui/TextField'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setOnboardingField } from '/imports/new-ui/state'

const styles = {
  container: {
  },
  header: {
    marginBottom: '20px'
  },
  subtitle: {
    fontSize: '16px',
    marginTop: '8px'
  }
}

const Password = ({ dispatch, password1, password2 }) => (
  <Col style={styles.container}>
    <div style={styles.header}>
      <h2>Your Password</h2>
      <span>Please create a secure password below. At least 8 characters in length.</span>
    </div>
    <label className="pt-label">
      Password
      <input 
        className='pt-input pt-fill' 
        type="password"
        dir="auto"
        value={password1}
        onChange={e => dispatch(setOnboardingField('password1', e.target.value))}
      />
    </label>
    <label className="pt-label">
      Confirm Password
      <input 
        className='pt-input pt-fill' 
        type="password"
        dir="auto"
        value={password2}
        onChange={e => dispatch(setOnboardingField('password2', e.target.value))}
      />
    </label>
  </Col>
)

const mapStateToProps = ({ onboarding }) => ({
  password1: onboarding.password1,
  password2: onboarding.password2,
})

export default connect(mapStateToProps)(Password)