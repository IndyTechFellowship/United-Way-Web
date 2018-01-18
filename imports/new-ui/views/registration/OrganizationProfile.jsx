import { Col } from 'jsxstyle';
import {
  MenuItem,
  SelectField,
  TextField,
} from 'material-ui';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import states from '/imports/helpers/states';
import {
  setOnboardingField,
} from '/imports/new-ui/state';

class OrganizationProfile extends Component {

  render() {
    const {
      dispatch,
      organizationDescription,
      organizationCity,
      organizationName,
      organizationState,
    } = this.props;
    return (
      <Col style={styles.container}>
        <div style={styles.header}>
          <h2>Your Organization</h2>
          <span>Tell us basic information about your organization. You'll be able to edit this information, fill out additional details, and add positions later.</span>
        </div>
        <label className="pt-label">
          Organization Name
          <input 
            className='pt-input pt-fill' 
            type="text"
            dir="auto"
            value={organizationName}
            onChange={e => dispatch(setOnboardingField('organizationName', e.target.value))}
          />
        </label>
        <label className="pt-label">
          Summary
          <textarea
            style={styles.summary}
            className='pt-input pt-fill'
            dir='auto'
            onChange={(e) => dispatch(setOnboardingField('organizationDescription', e.target.value))}
            value={organizationDescription}
          />
        </label>
        <label className="pt-label">
          Location
          <div className='pt-control-group'>
            <input 
              className='pt-input pt-fill' 
              type="text"
              placeholder="City"
              dir="auto"
              value={organizationCity}
              onChange={e => dispatch(setOnboardingField('organizationCity', e.target.value))}
            />
            <input 
              className='pt-input pt-fill' 
              type="text"
              placeholder="State"
              dir="auto"
              value={organizationState}
              onChange={e => dispatch(setOnboardingField('organizationState', e.target.value))}
            />
          </div>
        </label>
      </Col>
    );
  }

}

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

const mapStateToProps = ({ onboarding }) => ({
  organizationDescription: onboarding.organizationDescription,
  organizationName: onboarding.organizationName,
  organizationCity: onboarding.organizationCity,
  organizationState: onboarding.organizationState,
})

export default connect(mapStateToProps)(OrganizationProfile);