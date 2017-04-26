import {
  TextField,
} from 'material-ui'
import SearchIcon from 'material-ui/svg-icons/action/search'
import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import {
  setFullTextSearchTerm,
  updateFullTextSearchResults,
} from '/imports/ui/state'

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexGrow: '1',
    margin: '24px',
  },
  icon: {
    color: 'white',
    marginRight: '4px',
  },
  field: {
    color: 'white',
  },
}

const SearchBox = ({ dispatch, searchTerm }) => (
  <div style={styles.container}>
    <SearchIcon style={styles.icon} />
    <TextField
      fullWidth={true}
      hintText="Search"
      onChange={onFieldChange(dispatch)}
      onKeyDown={onKeyDown(dispatch)}
      style={styles.field}
      value={searchTerm}
    />
  </div>
);

const onFieldChange = (dispatch) => (
  (e, v) => dispatch(setFullTextSearchTerm(v))
)

const onKeyDown = (dispatch) => (
  (e, v) => {
    if (e.keyCode === 13) {
      dispatch(updateFullTextSearchResults())
      browserHistory.push('/search')
    }
  }
)

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

const mapStateToProps = ({ search }) => ({
  searchTerm: search.searchTerm,
})

export default connect(mapStateToProps)(SearchBox)