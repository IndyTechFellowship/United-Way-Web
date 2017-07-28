import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';

import { Positions } from '/imports/api/Positions'
import PositionsList from './PositionsList'
import CollectionFilterBar from '/imports/ui/components/CollectionFilterBar';
import { setPositionSearchResults } from '/imports/ui/state'

class PositionsListContainer extends Component {

  render() {
    const {
      dispatch,
      loading,
      organization,
      positionResults,
    } = this.props;
    let {
      positions,
    } = this.props;
    if (positionResults) positions = _.intersectionBy(positions, positionResults, p => p._id)
    return (
      <div>
        <CollectionFilterBar
          clearFilters={() => dispatch(setPositionSearchResults(null))}
          isTextFiltered={!!positionResults} />
        <PositionsList 
          loading={loading}
          organization={organization}
          positions={positions} />
      </div>
    );
  }
}

PositionsListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  positionResults: PropTypes.array,
}

const mapStateToProps = ({ search }) => ({
  positionResults: search.positionResults,
});

export default createContainer((props) => {
  const positionSubscription = Meteor.subscribe('Positions.get', props.query)
  if (!positionSubscription.ready()) {
    return { loading: true, positions: [], organization: {} }
  } else {
    return { loading: false, positions: Positions.find(props.query).fetch(), organization:
        !props.organization ? {} : props.organization }
  }
}, connect(mapStateToProps)(PositionsListContainer))