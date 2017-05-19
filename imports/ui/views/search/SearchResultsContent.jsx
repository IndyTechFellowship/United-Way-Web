import _ from 'lodash'
import {
  Card
} from 'material-ui';
import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import SearchResult from './SearchResult'
import {
  setFullTextSearchTerm,
} from '/imports/ui/state'

const styles = {
  resultWrapper: {
    margin: '12px',
  }
}

const SearchResultsContent = ({ dispatch, searchResults }) => (
  <div>
    {searchResults.map(sr => (
      <div>
        {sr._type === 'Users' && 
          <div style={styles.resultWrapper}>
            <SearchResult
              key={sr._id}
              avatar={_.get(sr, 'profile.avatar.original')}
              onClick={clickUser(dispatch, sr._id)}
              subtitle={sr.profile.tagline}
              title={`${sr.profile.firstName} ${sr.profile.lastName}`}
              type='Person' />
          </div>}
      </div>
    ))}
  </div>
);

const clickUser = (dispatch, id) => () => {
  dispatch(setFullTextSearchTerm(''))
  browserHistory.push(`/users/${id}`)
}

export default connect()(SearchResultsContent)