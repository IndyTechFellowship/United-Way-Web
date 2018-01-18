import _ from 'lodash';
import {
  TextField,
} from 'material-ui'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {
  setFullTextSearchAnchor,
  setFullTextSearchTerm,
  setUserSearchResults,
  updateFullTextSearchResults,
  setSearchCategoriesOpen,
} from '/imports/new-ui/state'
import ResultCategoryDropdown from './ResultCategoryDropdown'

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    margin: '16px 24px 16px 8px',
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
  return (
    <div style={styles.container}>
      <div className="pt-input-group search">
        <span className="pt-icon pt-icon-search"></span>
        <input 
          className="pt-input" 
          placeholder="Search..." 
          type="text"
          onChange={onUpdateInput(dispatch)}
          value={searchTerm}
        />
        <ResultCategoryDropdown />
      </div>
    </div>
  )
};

const onUpdateInput = (dispatch) => (e) => {
  dispatch(setFullTextSearchAnchor(e.target));
  if (e.target.value) {
    dispatch(setSearchCategoriesOpen(true));
  }
  dispatch(setFullTextSearchTerm(e.target.value));
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

const mapStateToProps = ({ search }) => ({
  searchTerm: search.searchTerm,
})

export default connect(mapStateToProps)(SearchBox)