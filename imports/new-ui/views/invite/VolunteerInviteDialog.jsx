import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { Button, Callout, Dialog, Intent, Switch } from '@blueprintjs/core'
import _ from 'lodash'

import Loader from '/imports/new-ui/components/Loader'

class VolunteerInviteDialog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
      inviteLink: null,
      error: false
    }
    this.closeDialog = this.closeDialog.bind(this)
    this.inviteAnotherVolunteer = this.inviteAnotherVolunteer.bind(this)
    this.generateInviteLink = this.generateInviteLink.bind(this)
  }
  
  closeDialog() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      companyName: '',
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
      companyName: '',
      inviteLink: null,
      error: false
    })
  }

  generateInviteLink() {
    if (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.companyName
    ) {
      this.setState({ error: true })
      return
    }
    const link = `${location.protocol}//${location.host}/register?firstName=${this.state.firstName}&lastName=${this.state.lastName}&email=${this.state.email}&companyName=${this.state.companyName}`
    Meteor.call('User.generateInviteLink', link, (err, resp) => {
      if (err) {
        this.setState({ inviteLink: "Oops, unable to generate link. Please try again." })
      } else {
        this.setState({ inviteLink: resp.data.url })
      }
    })
  }

  render() {
    const { isOpen, toggleDialog } = this.props
    return (
      <Dialog
        isOpen={isOpen}
        onClose={toggleDialog}
        title={<div>Invite Volunteer</div>}
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
                text="Invite Another Volunteer"
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
                Company Name <span className="pt-text-muted">(required)</span>
                <input 
                  className={`pt-input pt-fill ${this.state.error && !this.state.companyName ? 'pt-intent-danger' : null}`}
                  type="text"
                  placeholder='ex. Salesforce'
                  dir="auto"
                  value={this.state.companyName}
                  onChange={(e) => this.setState({ companyName: e.target.value })}
                />
              </label>
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
  }
}

export default VolunteerInviteDialog