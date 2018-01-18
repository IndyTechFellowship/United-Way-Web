import { Col } from 'jsxstyle'
import TextField from 'material-ui/TextField'
import React, { Component, PropTypes } from 'react'
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

const YourAccount = ({ dispatch, email, firstName, lastName, organizationName }) => (
  <Col style={styles.container}>
    <div style={styles.header}>
      <h2>Your Account</h2>
      <span>Please fill out the fields below to setup your account.</span>
    </div>
    <label className="pt-label">
      First Name
      <input 
        className='pt-input pt-fill' 
        type="text"
        placeholder='ex. John'
        dir="auto"
        value={firstName}
        onChange={e => dispatch(setOnboardingField('firstName', e.target.value))}
      />
    </label>
    <label className="pt-label">
      Last Name
      <input 
        className='pt-input pt-fill' 
        type="text"
        placeholder='ex. Smith'
        dir="auto"
        value={lastName}
        onChange={e => dispatch(setOnboardingField('lastName', e.target.value))}
      />
    </label>
    <label className="pt-label">
      Email Address
      <input 
        className='pt-input pt-fill' 
        type="text"
        placeholder='ex. john.smith@website.com'
        dir="auto"
        value={email}
        onChange={e => dispatch(setOnboardingField('email', e.target.value))}
      />
    </label>
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