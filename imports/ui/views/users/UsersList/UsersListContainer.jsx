import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Users } from '/imports/api/Users'
import UsersList from './UsersList'
import UserListFilterBar from './UserListFilterBar'

class UsersListContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { loading, searchResultsLoading, userResults } = this.props
    let { users } = this.props
    if (userResults) users = _.intersectionBy(users, userResults, u => u._id)
    return <div>
      <UserListFilterBar isTextFiltered={!!userResults} />
      <UsersList 
        loading={searchResultsLoading || loading} 
        users={users} />
    </div>
  }

}

UsersListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  searchResultsLoading: PropTypes.bool,
  users: PropTypes.array,
  userResults: PropTypes.array,
}

const mapStateToProps = ({ search }) => ({
  searchResultsLoading: search.searchResultsLoading,
  userResults: search.userResults,
})

export default createContainer(() => {
    const query = {}
    const handle = Meteor.subscribe('Users.get', query)
    if (!handle.ready()) return { loading: true, users: [] }
    else return { loading: false, users: Users.find({}).fetch() }
}, connect(mapStateToProps)(UsersListContainer))