import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'

import { Organizations } from '/imports/api/Organizations'
import OrganizationsList from './OrganizationsList'

import Content from '/imports/ui/components/Content'
import CollectionFilterBar from '/imports/ui/components/CollectionFilterBar';
import { setOrganizationSearchResults } from '/imports/ui/state'
import { connect } from 'react-redux'

class OrganizationsListStateContainer extends Component {

  render() {
    const { 
      dispatch,
      loading,
      searchResultsLoading,
      organizationResults,
    } = this.props
    let { organizations } = this.props;
    if (organizationResults) organizations = _.intersectionBy(organizations, organizationResults, o => o._id)
    return (
      <Content>
        <CollectionFilterBar
          clearFilters={() => dispatch(setOrganizationSearchResults(null))}
          isTextFiltered={!!organizationResults} />
        <OrganizationsList
          loading={loading}
          organizations={organizations} />
      </Content>
    )
  }

}

OrganizationsListStateContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  organizations: PropTypes.array,
  organizationResults: PropTypes.array,
};

const mapStateToProps = ({ search }) => ({
  organizationResults: search.organizationResults,
});

export default createContainer(() => {
  const query = {}
  const handle = Meteor.subscribe('Organizations.get', query)
  if (!handle.ready()) return { loading: true, organizations: [] }
  else return { loading: false, organizations: Organizations.find({}).fetch() }
}, connect(mapStateToProps)(OrganizationsListStateContainer))
