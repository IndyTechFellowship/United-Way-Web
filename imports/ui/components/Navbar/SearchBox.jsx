import _ from 'lodash';
import {
  TextField,
} from 'material-ui'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {
  setFullTextSearchAnchor,
  setFullTextSearchResults,
  setFullTextSearchTerm,
  updateFullTextSearchResults,
} from '/imports/ui/state'

import SearchResultsPopover from './SearchResultsPopover';

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: '1',
    margin: '24px 24px 24px 8px',
  },
  icon: {
    color: 'white',
    marginRight: '4px',
  },
  textField: {
    color: 'white',
  },
}

const SearchBox = ({ dispatch, searchResults, searchTerm }) => {
  const mapped = _.map(searchResults, r => {
    if (r._type === 'Organizations') {
      return `Organization: ${r.name}`
    } else if (r._type === 'Users') {
      return `User: ${r.profile.firstName} ${r.profile.lastName}`;
    }
    return 'nothing'
  });
  return (
    <div style={styles.container}>
      <TextField
        fullWidth={true}
        hint="Search..."
        inputStyle={styles.textField}
        onChange={onUpdateInput(dispatch)}
        onKeyDown={onKeyDown(dispatch)}
        style={styles.textField} 
        value={searchTerm} />
      <SearchResultsPopover />
    </div>
  )
};

const onUpdateInput = (dispatch) => (e, v) => {
  dispatch(setFullTextSearchAnchor(e.currentTarget));
  dispatch(setFullTextSearchResults([]))
  dispatch(setFullTextSearchTerm(v))
}

const onKeyDown = (dispatch) => (e) => {
  if (e.keyCode === 13) {
    dispatch(updateFullTextSearchResults())
  }
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

const mapStateToProps = ({ search }) => ({
  searchTerm: search.searchTerm,
})

export default connect(mapStateToProps)(SearchBox)