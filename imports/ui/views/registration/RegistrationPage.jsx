import React, { Component } from 'react'
import { browserHistory, Link } from 'react-router'
import { connect } from 'react-redux'
import { Paper } from 'material-ui'
import {
  Step,
  Stepper,
  StepContent,
  StepLabel,
} from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'

import { Colors } from '/imports/ui/styles'
import Content from '/imports/ui/components/Content'
import { 
  createAccount,
  createOrganization,
  setOnboardingError, 
  setOnboardingField,
} from '/imports/ui/state'
import Introduction from './Introduction'
import OrganizationProfile from './OrganizationProfile'
import Password from './Password'
import YourAccount from './YourAccount'

class RegistrationPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      finished: false,
      stepIndex: 0,
      stepping: false
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

  handleCreate() {
    const { createAccount, createOrganization, organizationName } = this.props;
    if (organizationName) {
      createAccount(() => createOrganization(() => browserHistory.push('/')));
    } else {
      createAccount(() => browserHistory.push('/'));
    }
  }

  handleNext() {
    const { createAccount, organizationName, password1, password2, setError } = this.props;
    const { stepIndex } = this.state;
    switch (stepIndex) {
      case 1:  // Password
        if (password1 !== password2) {
          return setError('Your Passwords Must Match.')
        } else if (!password1 || password1.length < 8) {
          return setError('Enter a Password At Least 8 Characters In Length.')
        }
        setError(null)
        if (organizationName) {
          return this.setState({ stepIndex: 2 });
        } else {
          return this.handleCreate();
        }
      case 2:
        setError(null)
        return this.handleCreate();
      default: 
        setError(null)
        return this.setState({ stepIndex: stepIndex + 1 })
    }
  }

  handlePrev() {
    const { organizationName, setError } = this.props
    const { stepIndex } = this.state
    setError(null)
    switch (stepIndex) {
      case 3:
        if (organizationName) {
          return this.setState({ stepIndex: 2 });
        } else {
          return this.setState({ stepIndex: 1 });
        }
      default:
        if (stepIndex > 0) {
          return this.setState({ stepIndex: stepIndex - 1 });
        }   
    }
  }

  getStepContent(stepIndex, organizationName) {
    switch (stepIndex) {
      case 0:
        return <YourAccount />
      case 1:
        return <Password />
      case 2:
        return <OrganizationProfile organizationName={organizationName} />
    }
    return <div></div>
  }

  onLastStep() {
    const { organizationName } = this.props
    const { stepIndex } = this.state
    return organizationName 
      ? stepIndex === 2
      : stepIndex === 1;
  }

  render() {
    const { error, organizationName } = this.props;
    const { finished, stepIndex, stepping } = this.state;

    let steps = [
      <Step>
        <StepLabel>Your Account</StepLabel>
        <StepContent>
          <p>Enter basic account information and create your account.</p>
        </StepContent>
      </Step>,
      <Step>
        <StepLabel>Password</StepLabel>
        <StepContent>
          <p>Set a secure password and finish account creation.</p>
        </StepContent>
      </Step>
    ]
    if (organizationName) {
      steps.push(
        <Step>
          <StepLabel>Organization Profile</StepLabel>
        </Step>
      )
    }
    
    return (
      <div style={styles.fullscreen}>
        <div style={styles.title}>
          <div><img style={styles.logo} src="logo.svg" /></div>
          <div>BoardServeIndy</div>
        </div>
        <Paper style={styles.paper}>
          { stepping ?
            <div style={styles.stepper}>
              <div style={styles.sidebar}>
                <Stepper activeStep={stepIndex} orientation="vertical">
                  {steps}
                </Stepper>
              </div>
              <div style={styles.content}>
                <div>{this.getStepContent(stepIndex, organizationName)}</div>
                <div style={styles.buttons}>
                  {error && <span style={styles.error}>{error}</span>}
                  {stepIndex > 0 ?
                    <FlatButton
                      label="Back"
                      onTouchTap={this.handlePrev.bind(this)}
                      style={{marginRight: 12}} />
                  : null
                  }
                  <RaisedButton
                    label={this.onLastStep() ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.handleNext.bind(this)} />
                </div>
              </div>
            </div>
          :
            <Introduction 
              organizationName={organizationName}
              getStarted={() => { this.setState({ stepping: true })}} 
            />
          }
        </Paper>
      </div>
    )
  }

}

const styles = {
  stepper: {
    display: 'flex',
  },
  paper: {
    margin: '24px',
    padding: '12px',
    maxWidth: '800px',
    margin: '0 auto'
  },
  sidebar: {
    flexBasis: '30%',
    background: '#ececec',
    marginRight: '16px'
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
  content: {
    flexBasis: '70%',
    padding: '16px'
  },
  fullscreen: {
    position: 'absolute',
    zIndex: '100000',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundImage: "url(register_bg.jpg)",
    backgroundColor: '#444444',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: '64px',
    marginRight: '8px'
  },
  title: {
    fontSize: '32px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    padding: '4px',
    textShadow: '0px 1px 2px rgba(0, 0, 0, .75)'
  }
}

const mapStateToProps = ({ onboarding }) => ({
  error: onboarding.error,
  organizationName: onboarding.organizationName,
  password1: onboarding.password1,
  password2: onboarding.password2,
})

const mapDispatchToProps = (dispatch) => ({
  createAccount: (cb) => dispatch(createAccount(cb)),
  createOrganization: (cb) => dispatch(createOrganization(cb)),
  setError: (e) => dispatch(setOnboardingError(e)),
  setField: (fN, fV) => dispatch(setOnboardingField(fN, fV)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
