import { Col } from 'jsxstyle'
import {
  Paper,
  Toggle,
} from 'material-ui'
import React from 'react'
import { connect } from 'react-redux'

import { Colors } from '/imports/ui/styles';
import {
  setFullTextSearchFilterToggle,
  updateFullTextSearchResults,
} from '/imports/ui/state'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '12px',
  },
  header: {
    color: Colors.darkGrey,
    fontSize: '18px',
  },
  switchContainer: {
    padding: '12px'
  },
  checkbox: {
    
  },
}

const SearchFiltering = ({ dispatch, filters }) => (
  <Paper style={styles.container}>
    <span style={styles.header}>Result Types</span>
    <div style={styles.switchContainer}>
      <Toggle
        label='Organizations'
        onToggle={onToggle(dispatch, 'organizations')}
        style={styles.checkbox} 
        toggled={filters.organizations} />
      <Toggle 
        label='People' 
        onToggle={onToggle(dispatch, 'users')}
        style={styles.checkbox} 
        toggled={filters.users} />
      <Toggle
        label='Positions'
        onToggle={onToggle(dispatch, 'positions')}
        style={styles.checkbox}
        toggled={filters.positions} />
    </div>
  </Paper>
);

const onToggle = (dispatch, toggle) => (e, toggled) => {
  dispatch(setFullTextSearchFilterToggle(toggle, toggled))
  dispatch(updateFullTextSearchResults())
}

const mapStateToProps = ({ search }) => ({
  filters: search.searchFilters,
})

export default connect(mapStateToProps)(SearchFiltering);