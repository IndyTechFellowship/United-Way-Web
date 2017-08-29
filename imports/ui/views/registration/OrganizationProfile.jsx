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
} from '/imports/ui/state';

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
          Organization Information
        </div>
        <TextField
          floatingLabelText="Organization Name"
          onChange={(e, v) => dispatch(setOnboardingField('organizationName', v))}
          value={organizationName}
        />
        <TextField
          floatingLabelText="Description"
          multiLine={true}
          onChange={(e, v) => dispatch(setOnboardingField('organizationDescription', v))}
          rows={3}
          rowsMax={3}
          value={organizationDescription}
        />
        <TextField
          floatingLabelText="City"
          onChange={(e, v) => dispatch(setOnboardingField('organizationCity', v))}
          value={organizationCity}
        />
        <SelectField
          floatingLabelText="State"
          onChange={(e, i, v) => dispatch(setOnboardingField('organizationState', v))}
          value={organizationState}>
          {_.map(states, (s) => <MenuItem key={s.name} primaryText={s.name} value={s.abbreviation} />)}
        </SelectField>
      </Col>
    );
  }

}

const styles = {
  container: {
    alignItems: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
}

const mapStateToProps = ({ onboarding }) => ({
  organizationDescription: onboarding.organizationDescription,
  organizationName: onboarding.organizationName,
  organizationCity: onboarding.organizationCity,
  organizationState: onboarding.organizationState,
})

export default connect(mapStateToProps)(OrganizationProfile);

