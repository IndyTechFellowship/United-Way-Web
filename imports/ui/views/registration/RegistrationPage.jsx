import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import { setOnboardingError, setOnboardingField } from '/imports/ui/state'
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
    const { dispatch, location: { query } } = this.props
    query.email && dispatch(setOnboardingField('email', query.email))
    query.firstName && dispatch(setOnboardingField('firstName', query.firstName))
    query.lastName && dispatch(setOnboardingField('lastName', query.lastName))
    query.organizationName && dispatch(setOnboardingField('organizationName', query.organizationName))
  }

  handleNext() {
    const { dispatch, password1, password2 } = this.props;
    const { stepIndex } = this.state;
    switch (stepIndex) {
      case 1:  // Password
        if (password1 !== password2) {
          return dispatch(setOnboardingError('Your Passwords Must Match.'))
        } else if (!password1 || password1.length < 8) {
          return dispatch(setOnboardingError('Enter a Password At Least 8 Characters In Length.'))
        }
      default: return this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 3,
      })
    }
  }

  handlePrev() {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
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
      default:
        return 'Oops, something went wrong!';
    }
  }

  render() {
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
          {finished ? (
            <p>
              You've successfully set up your account! <Link to='/'>Click here</Link> to begin exploring the website.
            </p>
          ) : (
            <div>
              <div>{this.getStepContent(stepIndex)}</div>
              <div style={styles.buttons}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onTouchTap={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 3 ? 'Finish' : 'Next'}
                  primary={true}
                  onTouchTap={this.handleNext}
                />
              </div>
            </div>
          )}
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
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '12px'
  }
}

const mapStateToProps = ({ onboarding }) => ({
  password1: onboarding.password1,
  password2: onboarding.password2,
})

export default connect(mapStateToProps)(RegistrationPage)
