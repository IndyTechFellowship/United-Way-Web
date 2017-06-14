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

import { Colors } from '/imports/ui/styles';

const styles = {
  resultWrapper: {
    margin: '0px 12px 12px 12px',
  },
  missingContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  missingText: {
    color: Colors.darkGrey,
    fontSize: '18px',
  },
}

const SearchResultsContent = ({ dispatch, searchResults }) => {
  if (searchResults && searchResults.length > 0) {
    return (
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
    )
  } else {
    return <div style={styles.missingContainer}>
      <span style={styles.missingText}>No results found!</span>
    </div>
  }
};

const clickUser = (dispatch, id) => () => {
  dispatch(setFullTextSearchTerm(''))
  browserHistory.push(`/users/${id}`)
}

export default connect()(SearchResultsContent)