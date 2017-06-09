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
} from '/imports/ui/state'

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

const SearchBox = ({ dispatch, onSubmit, searchResults, searchTerm }) => {
  return (
    <div style={styles.container}>
      <TextField
        fullWidth={true}
        inputStyle={styles.textField}
        onChange={onUpdateInput(dispatch)}
        onKeyDown={(e) => e.keyCode === 13 && onSubmit()}
        style={styles.textField} 
        value={searchTerm} />
    </div>
  )
};

const onUpdateInput = (dispatch) => (e, v) => {
  dispatch(setFullTextSearchAnchor(e.currentTarget));
  dispatch(setFullTextSearchTerm(v))
}

SearchBox.propTypes = {
  dispatch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
}

const mapStateToProps = ({ search }) => ({
  searchTerm: search.searchTerm,
})

export default connect(mapStateToProps)(SearchBox)