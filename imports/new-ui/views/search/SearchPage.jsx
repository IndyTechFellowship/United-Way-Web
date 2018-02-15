import _ from 'lodash'
import { createContainer } from 'meteor/react-meteor-data'
import React from 'react'
import { NonIdealState } from '@blueprintjs/core'

import Loader from '/imports/new-ui/components/Loader'
import Organization from '/imports/new-ui/components/Organizations/Organization'
import Position from '/imports/new-ui/components/Positions/Position'
import Volunteer from '/imports/new-ui/components/Volunteers/Volunteer'
import { Tags } from '/imports/api/Tags'
import { Organizations } from '/imports/api/Organizations'
import { Users } from '/imports/api/Users'
import { Positions } from '/imports/api/Positions'

class SearchPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      organizationsLoading: true,
      organizationsResults: [],
      positionsLoading: true,
      positionsResults: [],
      volunteersLoading: true,
      volunteersResults: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) {
      return
    }

    Meteor.call('Search.Organizations.FullText', nextProps.query, {}, (err, results) => {
      this.setState({ organizationsLoading: false, organizationsResults: _.intersectionBy(nextProps.organizations, results, o => o._id) })
    })

    Meteor.call('Search.Positions.FullText', nextProps.query, {}, (err, results) => {
      this.setState({ positionsLoading: false, positionsResults: _.intersectionBy(nextProps.positions, results, p => p._id) })
    })

    Meteor.call('Search.Users.FullText', nextProps.query, {}, (err, results) => {
      this.setState({ volunteersLoading: false, volunteersResults: _.intersectionBy(nextProps.volunteers, results, v => v._id) })
    })
  }

  render() {
    const { query } = this.props
    if (this.state.organizationsLoading || this.state.positionsLoading || this.state.volunteersLoading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div style={styles.content}>
          <div style={styles.results}>
            <h2>Search Results</h2>
            <p>{`for "${query}"`}</p>
            <br />
            <h4>Organizations</h4>
            {this.state.organizationsResults.length > 0 
              ? <div style={styles.container}>
                  {
                    this.state.organizationsResults.map(organization => <Organization key={organization._id} organization={organization} />)
                  }
                </div>
              : <div style={styles.nonIdealState}>
                  <NonIdealState
                    visual="search"
                    title="No organizations matched your search"
                    description='Try a less specific search.'
                  />
                </div>
              }
            <br />
            <h4>Positions</h4>
            {this.state.positionsResults.length > 0 
              ? <div style={styles.container}>
                  {
                    this.state.positionsResults.map(position => <Position key={position._id} position={position} />)
                  }
                </div>
              : <div style={styles.nonIdealState}>
                  <NonIdealState
                    visual="search"
                    title="No positions matched your search"
                    description='Try a less specific search.'
                  />
                </div>
              }
            <br />
            <h4>Volunteers</h4>
            {this.state.volunteersResults.length > 0 
              ? <div style={styles.container}>
                  {
                    this.state.volunteersResults.map(volunteer => <Volunteer key={volunteer._id} volunteer={volunteer} />)
                  }
                </div>
              : <div style={styles.nonIdealState}>
                  <NonIdealState
                    visual="search"
                    title="No volunteers matched your search"
                    description='Try a less specific search.'
                  />
                </div>
              }
          </div>
        </div>
      )
    }
  }
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start'
  },
  header: {
    fontSize: '76px',
    color: 'white',
    fontFamily: 'Pacifico'
  },
  subheader: {
    marginTop: '32px',
    fontSize: '32px',
    color: 'white',
    fontFamily: 'Itim'
  },
  results: {
    margin: '40px 0'
  },
  nonIdealState: {
    margin: '64px 0',
    width: '100%'
  }
}

export default createContainer((props) => {
  const query = props.location.query.q
  // get tags and experiences
  const subs = [
    Meteor.subscribe('Positions.get', {}),
    Meteor.subscribe('Tags.get', {}),
    Meteor.subscribe('Organizations.get', {}),
    Meteor.subscribe('Users.get', {})
  ]
  if (_.some(subs, (s) => !s.ready())) return { query, loading: true, positions: [], organizations: [], volunteers: [] }

  const positions = Positions.find().fetch()
  positions.map(position => (
    Object.assign(position,
      {
        skills: Tags.find({ _id: { $in: position.skills || [] } }).fetch(),
        organization: Organizations.find({ positions: position._id }).fetch()[0]
      }
    )
  ))

  const organizations = Organizations.find().fetch()
  organizations.map(organization => (
    Object.assign(organization,
      {
        tags: Tags.find({ _id: { $in: organization.tags || [] } }).fetch()
      }
    )
  ))

  const volunteers = Users.find().fetch()
  volunteers.map(volunteer => {
    volunteer.profile = Object.assign(volunteer.profile, {
      skills: Tags.find({ _id: { $in: volunteer.profile.skills || [] } }).fetch()
    })
    return volunteer
  })

  return { query, loading: false, positions, organizations, volunteers }
}, SearchPage)