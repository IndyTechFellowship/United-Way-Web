import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { NonIdealState } from '@blueprintjs/core'

import Loader from '/imports/new-ui/components/Loader'
import { Tags } from '/imports/api/Tags'
import { Positions } from '/imports/api/Positions'
import { Organizations } from '/imports/api/Organizations'
import Position from '/imports/new-ui/components/Positions/Position'

class ActivityPage extends Component {

  render() {
    const {
      currentUser,
      loading
    } = this.props
    let { positionsRecommendedFor, bookmarkedPositions, interestedPositions } = this.props
    if (loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <div style={styles.content}>
          <div style={styles.positions}>
            <h2>Your Activity</h2>
            <br />
            <h4>Bookmarked Positions</h4>
            {bookmarkedPositions.length > 0 
            ? <div style={styles.container}>
                {
                  bookmarkedPositions.map(position => <Position key={position._id} position={position} />)
                }
              </div>
            : <div style={styles.nonIdealState}>
                <NonIdealState
                  visual="box"
                  title="You haven't bookmarked any positions"
                  description='Click on a position card and click the "Bookmark" button in the upper right to bookmark it.'
                />
              </div>
            }
            <br />
            <h4>Positions You've Expressed Interest In</h4>
            {interestedPositions.length > 0 
            ? <div style={styles.container}>
                {
                  interestedPositions.map(position => (
                    <div>
                      <Position key={position._id} position={position} />
                    </div>
                  ))
                }
              </div>
            : <div style={styles.nonIdealState}>
                <NonIdealState
                  visual="box"
                  title="You haven't expressed interest in any positions"
                  description='Click on a position card and click the "Show Interest" button in the lower right to express interests it.'
                />
              </div>
            }
            <br />
            <h4>Positions You've Been Recommended For</h4>
            {positionsRecommendedFor.length > 0 
            ? <div style={styles.container}>
                {
                  positionsRecommendedFor.map(position => <Position key={position._id} position={position} />)
                }
              </div>
            : <div style={styles.nonIdealState}>
                <NonIdealState
                  visual="box"
                  title="You haven't been recommended for any positions."
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
  positions: {
    margin: '40px 0'
  },
  nonIdealState: {
    margin: '64px 0',
    width: '100%'
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps)(createContainer((props) => {
  // get tags and experiences
  const subs = [
    Meteor.subscribe('Positions.get', {}),
    Meteor.subscribe('Tags.get', {}),
    Meteor.subscribe('Organizations.get', {})
  ]
  if (_.some(subs, (s) => !s.ready())) return { loading: true, currentUser: props.currentUser, positionsRecommendedFor: [], bookmarkedPositions: [], interestedPositions: [] }

  const positionsRecommendedFor = Positions.find({ 'recommendations.userId': props.currentUser._id }).fetch()
  positionsRecommendedFor.map(position => (
    Object.assign(position,
      {
        skills: Tags.find({ _id: { $in: position.skills || [] } }).fetch(),
        organization: Organizations.find({ positions: position._id }).fetch()[0]
      }
    )
  ))

  const bookmarkedPositions = Positions.find({ _id: { $in: props.currentUser.profile.bookmarks || [] } }).fetch()
  bookmarkedPositions.map(position => (
    Object.assign(position,
      {
        skills: Tags.find({ _id: { $in: position.skills || [] } }).fetch(),
        organization: Organizations.find({ positions: position._id }).fetch()[0]
      }
    )
  ))

  const interestedPositions = Positions.find({ 'applicants.userId': props.currentUser._id }).fetch()
  interestedPositions.map(position => (
    Object.assign(position,
      {
        skills: Tags.find({ _id: { $in: position.skills || [] } }).fetch(),
        organization: Organizations.find({ positions: position._id }).fetch()[0]
      }
    )
  ))

  return { loading: false, currentUser: props.currentUser, positionsRecommendedFor, bookmarkedPositions, interestedPositions }
}, ActivityPage))