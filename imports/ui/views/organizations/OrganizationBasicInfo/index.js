import React, {Component} from 'react'

import { RaisedButton } from 'material-ui'

import OrganizationDetails from './OrganizationDetails'
import Skills from '/imports/ui/components/Skills'
import AvatarCard from '/imports/ui/components/AvatarCard'

class OrganizationBasicInfo extends Component {
  render() {
    return (
      <div style={styles.twoColumnLayout}>
        <div style={styles.outerContainer}>
          <div style={styles.column}>
            <AvatarCard avatarUrl={this.props.organization.avatarUrl} name={this.props.organization.name} />
          </div>
          <div style={styles.column}>
            <div style={styles.details}>
              <OrganizationDetails organization={this.props.organization}/>
              <Skills skills={this.props.organization.tags}/>
            </div>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <RaisedButton label="Follow Organization" />
        </div>
      </div>
    )
  }
}

const styles= {
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'column'
  },
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    flex: '1 1 50%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}

export default OrganizationBasicInfo
