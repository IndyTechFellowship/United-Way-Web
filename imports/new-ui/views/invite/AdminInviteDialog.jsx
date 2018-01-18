import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { Button, Callout, Dialog, Intent, Radio, RadioGroup, Switch } from '@blueprintjs/core'
import _ from 'lodash'

import Loader from '/imports/new-ui/components/Loader'

class AdminInviteDialog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      newOrganization: true,
      organizationName: '',
      organizationId: '',
      inviteLink: null,
      error: false
    }
    this.closeDialog = this.closeDialog.bind(this)
    this.inviteAnotherVolunteer = this.inviteAnotherVolunteer.bind(this)
    this.generateInviteLink = this.generateInviteLink.bind(this)
    this.toggleNewOrganization = this.toggleNewOrganization.bind(this)
  }
  
  closeDialog() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      newOrganization: true,
      organizationName: '',
      organizationId: '',
      inviteLink: null,
      error: false
    })
    this.props.toggleDialog()
  }

  inviteAnotherVolunteer() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      newOrganization: true,
      organizationName: '',
      organizationId: '',
      inviteLink: null,
      error: false
    })
  }

  generateInviteLink() {
    const validNewOrg = this.state.newOrganization && this.state.organizationName
    const validExistingOrg = !this.state.newOrganization && this.state.organizationId
    const validOrg = validNewOrg || validExistingOrg
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !validOrg
    ) {
      this.setState({ error: true })
      return
    }
    const organization = validNewOrg ? `&organizationName=${this.state.organizationName}` : `&organizationId=${this.state.organizationId}`
    const link = `${location.protocol}//${location.host}/register?firstName=${this.state.firstName}&lastName=${this.state.lastName}&email=${this.state.email}${organization}`
    Meteor.call('User.generateInviteLink', link, (err, resp) => {
      if (err) {
        this.setState({ inviteLink: "Oops, unable to generate link. Please try again." })
      } else {
        this.setState({ inviteLink: resp.data.url })
      }
    })
  }

  toggleNewOrganization(value) {
    this.setState({ newOrganization: value })
  }

  render() {
    const { isOpen, organizations, toggleDialog } = this.props
    return (
      <Dialog
        isOpen={isOpen}
        onClose={toggleDialog}
        title={<div>Invite Organization Admin</div>}
        canOutsideClickClose={true}
      >
        {this.state.inviteLink ?
          <div>
            <div className="pt-dialog-body" style={styles.dialogContent}>
              <label className="pt-label">Invite Link (copy and send to them)</label>
              <div style={styles.inviteLink}>{this.state.inviteLink}</div>
            </div>
            <div className="pt-dialog-footer" style={styles.dialogFooter}>
              <Button text="Close" onClick={this.closeDialog} />
              <Button
                text="Invite Another Organization Admin"
                intent={Intent.PRIMARY}
                onClick={this.inviteAnotherVolunteer}
              />
            </div>
          </div>
        :
          <div>
            <div className="pt-dialog-body" style={styles.dialogContent}>
              { this.state.error ?
                <Callout
                  intent={Intent.DANGER}
                  title={'Unable to generate link'}
                  style={styles.callout}
                >
                  Please fill out all the required fields.
                </Callout>
              :
                null
              }
              <label className="pt-label">
                Name <span className="pt-text-muted">(required)</span>
                <div className='pt-control-group'>
                  <input 
                    className={`pt-input pt-fill ${this.state.error && !this.state.firstName ? 'pt-intent-danger' : null}`} 
                    type="text"
                    placeholder='First Name'
                    dir="auto"
                    value={this.state.firstName}
                    onChange={(e) => this.setState({ firstName: e.target.value })}
                  />
                  <input 
                    className={`pt-input pt-fill ${this.state.error && !this.state.lastName ? 'pt-intent-danger' : null}`} 
                    type="text"
                    placeholder='Last Name'
                    dir="auto"
                    value={this.state.lastName}
                    onChange={(e) => this.setState({ lastName: e.target.value })}
                  />
                </div>
              </label>
              <label className="pt-label">
                Email <span className="pt-text-muted">(required)</span>
                <input 
                  className={`pt-input pt-fill ${this.state.error && !this.state.email ? 'pt-intent-danger' : null}`} 
                  type="text"
                  placeholder='ex. someone@website.com'
                  dir="auto"
                  value={this.state.email}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </label>
              <label className="pt-label">
                Organization <span className="pt-text-muted">(required)</span>
              </label>
              <div style={styles.radioOptions}>
                <Radio label="New Organization" checked={this.state.newOrganization} onChange={() => this.toggleNewOrganization(true)} />
                {this.state.newOrganization ?
                  <Callout style={styles.radioCallout}>
                    <label className="pt-label">
                      Organization Name
                      <input 
                        className={`pt-input pt-fill ${this.state.error && !this.state.organizationName ? 'pt-intent-danger' : null}`} 
                        type="text"
                        placeholder='ex. someone@website.com'
                        dir="auto"
                        value={this.state.organizationName}
                        onChange={(e) => this.setState({ organizationName: e.target.value })}
                      />
                    </label>
                  </Callout>
                : 
                  null
                }
                <Radio label="Existing Organization" checked={!this.state.newOrganization} onChange={() => this.toggleNewOrganization(false)} />
                {!this.state.newOrganization ?
                  <Callout style={styles.radioCallout}>
                    <label className="pt-label">
                      Choose Existing Organization
                      <div className="pt-select">
                        <select
                          value={this.state.organizationId}
                          onChange={(e) => this.setState({ organizationId: e.target.value })}
                        >
                          {organizations.map(org => <option key={org._id} value={org._id}>{org.name}</option>)}
                        </select>
                      </div>
                    </label>
                  </Callout>
                :
                  null
                }
              </div>
            </div>
            <div className="pt-dialog-footer" style={styles.dialogFooter}>
              <Button text="Cancel" onClick={this.closeDialog} />
              <Button
                text="Generate Invite Link"
                iconName='link'
                intent={Intent.PRIMARY}
                onClick={this.generateInviteLink}
              />
            </div>
          </div>
        }
      </Dialog>
    )
  }
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto',
  },
  form: {
    margin: '20px 0 10px 0',
    width: '400px'
  },
  dialogContent: {
    padding: '0 10px'
  },
  dialogFooter: {
    padding: '0 10px 10px 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  inviteLink: {
    fontSize: '24px',
    margin: '20px 0',
    overflowWrap: 'break-word'
  },
  callout: {
    marginBottom: '10px'
  },
  radioCallout: {
    marginBottom: '10px',
    marginLeft: '20px'
  },
  radioOptions: {
    marginLeft: '20px'
  }
}

export default AdminInviteDialog