import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { Link } from 'react-router'
import { Button, Card, Intent } from '@blueprintjs/core'
import _ from 'lodash'

import Loader from '/imports/new-ui/components/Loader'
import { Organizations } from '/imports/api/Organizations'
import AdminInviteDialog from './AdminInviteDialog'
import VolunteerInviteDialog from './VolunteerInviteDialog'

class InvitePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      invitingVolunteer: false,
      invitingAdmin: false
    }
    this.toggleInvitingVolunteer = this.toggleInvitingVolunteer.bind(this)
    this.toggleInvitingAdmin = this.toggleInvitingAdmin.bind(this)
  }

  toggleInvitingVolunteer() {
    this.setState({ invitingVolunteer: !this.state.invitingVolunteer })
  }

  toggleInvitingAdmin() {
    this.setState({ invitingAdmin: !this.state.invitingAdmin })
  }

  render() {
    const { loading, organizations } = this.props
    if (loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div style={styles.content}>
          <h1>Invite New User</h1>
          <div style={styles.cardContainer}>
            <div style={styles.card}>
              <Card elevation={Card.ELEVATION_TWO}>
                <h5>Volunteer</h5>
                <div>
                  Volunteers can: 
                  <ul>
                    <li>Browse organizations</li>
                    <li>View and express interest positions</li>
                    <li>Share his/her contact details with organizations</li>
                  </ul>
                </div>
                <div style={styles.actions}>
                  <Button className='pt-fill' intent={Intent.PRIMARY} onClick={this.toggleInvitingVolunteer}>Invite Volunteer</Button>
                </div>
              </Card>
            </div>
            <div style={styles.card}>
              <Card elevation={Card.ELEVATION_TWO}>
                <h5>Organization Admin</h5>
                <div>
                  Organization admins are responsible for: 
                  <ul>
                    <li>Setting up and maintaining his/her organization's profile</li>
                    <li>Adding positions his/her organization has available</li>
                    <li>Reaching out to interested volunteers</li>
                  </ul>
                </div>
                <div style={styles.actions}>
                  <Button className='pt-fill' intent={Intent.PRIMARY} onClick={this.toggleInvitingAdmin}>Invite Organization Admin</Button>
                </div>
              </Card>
            </div>
          </div>
          <VolunteerInviteDialog
            isOpen={this.state.invitingVolunteer}
            toggleDialog={this.toggleInvitingVolunteer}
          />
          <AdminInviteDialog
            isOpen={this.state.invitingAdmin}
            toggleDialog={this.toggleInvitingAdmin}
            organizations={this.props.organizations}
          />
        </div>
      )
    }
  }
}

//http://united-way-staging.herokuapp.com/register?firstName=Beth&lastName=Cline&email=Beth.Cline@uwci.org&token=2HArTOEbMu28z046@organizationName=United%20Way%20of%20Central%20Indiana

const styles = {
  content: {
    margin: '100px auto',
    width: '960px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  cardContainer: {
    display: 'flex'
  },
  card: {
    margin: '10px'
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
  }
}

export default createContainer(() => {
  // get tags and experiences
  const subs = [
    Meteor.subscribe('Organizations.get', {}),
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, organizations: [] }

  let organizations = Organizations.find().fetch()

  return { loading: false, organizations: organizations }
}, InvitePage)