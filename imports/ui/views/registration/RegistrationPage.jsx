import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import { 
  createAccount,
  setOnboardingError, 
  setOnboardingField,
} from '/imports/ui/state'
import OrganizationProfile from './OrganizationProfile'
import Password from './Password'
import VolunteerProfile from './VolunteerProfile'
import YourAccount from './YourAccount'

class RegistrationPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
    }
    this.handleNext = this.handleNext.bind(this)
    this.handlePrev = this.handlePrev.bind(this)
  }

  componentDidMount() {
    const { location: { query }, setField } = this.props
    query.email && setField('email', query.email)
    query.firstName && setField('firstName', query.firstName)
    query.lastName && setField('lastName', query.lastName)
    query.organizationName && setField('organizationName', query.organizationName)
    query.token && setField('token', query.token)
  }

  handleNext() {
    const { createAccount, password1, password2, setError } = this.props;
    const { stepIndex } = this.state;
    switch (stepIndex) {
      case 1:  // Password
        if (password1 !== password2) {
          return setError('Your Passwords Must Match.')
        } else if (!password1 || password1.length < 8) {
          return setError('Enter a Password At Least 8 Characters In Length.')
        }
        setError(null)
        return this.setState({ stepIndex: stepIndex + 1 });
      case 3: // Final Step
        setError(null)
        return createAccount(() => browserHistory.push('/'))
      default: 
        setError(null)
        return this.setState({ stepIndex: stepIndex + 1 })
    }
  }

  handlePrev() {
    const { setError } = this.props
    const { stepIndex } = this.state
    setError(null)
    if (stepIndex > 0) this.setState({ stepIndex: stepIndex - 1 })
  }

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <YourAccount />
      case 1:
        return <Password />
      case 2:
        return <OrganizationProfile />
      case 3:
        return <VolunteerProfile />
    }
  }

  render() {
    const { error } = this.props;
    const { finished, stepIndex } = this.state;
    const contentStyle = { margin: '0 16px' };
    return (
      <div style={styles.stepper}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Your Account</StepLabel>
          </Step>
          <Step>
            <StepLabel>Password</StepLabel>
          </Step>
          <Step>
            <StepLabel>Organization Profile</StepLabel>
          </Step>
          <Step>
            <StepLabel>Your Profile (Optional)</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          <div>{this.getStepContent(stepIndex)}</div>
          <div style={styles.buttons}>
            {error && <span style={styles.error}>{error}</span>}
            <FlatButton
              label="Back"
              disabled={stepIndex === 0}
              onTouchTap={this.handlePrev}
              style={{marginRight: 12}} />
            <RaisedButton
              label={stepIndex === 3 ? 'Finish' : 'Next'}
              primary={true}
              onTouchTap={this.handleNext} />
          </div>
        </div>
      </div>
    );
  }

}

const styles = {
  stepper: {
    width: '100%',
    marginBottom: '24px'
  },
  buttons: {
    alignItems: 'center',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '12px'
  },
  error: {
    color: 'red',
    fontSize: '13px',
    marginRight: '8px',
  },
}

const mapStateToProps = ({ onboarding }) => ({
  error: onboarding.error,
  password1: onboarding.password1,
  password2: onboarding.password2,
})

const mapDispatchToProps = (dispatch) => ({
  createAccount: (cb) => dispatch(createAccount(cb)), 
  setError: (e) => dispatch(setOnboardingError(e)),
  setField: (fN, fV) => dispatch(setOnboardingField(fN, fV)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
