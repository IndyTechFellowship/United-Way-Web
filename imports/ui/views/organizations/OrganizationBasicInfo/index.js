import React, {Component} from 'react'

import {FlatButton} from 'material-ui'

import OrganizationDetails from './OrganizationDetails'
import Skills from '/imports/ui/components/Skills'
import AvatarCard from '/imports/ui/components/AvatarCard'

class OrganizationBasicInfo extends Component {
  render() {
    return (
      <div>
        <div style={styles.outerContainer}>
          <AvatarCard avatarUrl={this.props.orgDetails.avatarUrl} name={this.props.orgDetails.name}/>
          <div style={styles.detailsBlock}>
            <OrganizationDetails details={this.props.orgDetails.info}/>
            <Skills/>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <FlatButton >Follow Organization</FlatButton>
        </div>
      </div>
    )
  }
}

const styles= {
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  detailsBlock: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}

export default OrganizationBasicInfo