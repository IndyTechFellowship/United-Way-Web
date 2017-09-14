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
} from '/imports/ui/state'
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
      <TextField
        hintText="Search BoardServeIndy..."
        hintStyle={{color:'rgba(255,255,255,0.6)'}}
        fullWidth={true}
        inputStyle={styles.textField}
        onChange={onUpdateInput(dispatch)}
        style={styles.textField} 
        value={searchTerm} />
      <ResultCategoryDropdown />
    </div>
  )
};

const onUpdateInput = (dispatch) => (e, v) => {
  dispatch(setFullTextSearchAnchor(e.currentTarget));
  if (v) {
    dispatch(setSearchCategoriesOpen(true));
  }
  dispatch(setFullTextSearchTerm(v));
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

const mapStateToProps = ({ search }) => ({
  searchTerm: search.searchTerm,
})

export default connect(mapStateToProps)(SearchBox)