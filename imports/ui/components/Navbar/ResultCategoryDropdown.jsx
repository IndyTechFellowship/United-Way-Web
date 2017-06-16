import {
  List,
  ListItem,
  Popover,
} from 'material-ui'
import SocialPerson from 'material-ui/svg-icons/social/person';
import React, { PropTypes } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import {
  setSearchCategoriesOpen,
  setUserSearchResults,
  updateUserSearchResults,
} from '/imports/ui/state'

const styles = {
  container: {
    width: '400px',
  },
};

const ResultCategoryDropdown = ({ anchor, dispatch, searchCategoriesOpen, searchTerm }) => {
  return (
    <Popover 
      anchorEl={anchor}
      open={searchCategoriesOpen}
      style={styles.container}>
      <List style={styles.container}>
        <ListItem leftIcon={<SocialPerson />} onTouchTap={onSearchClick(dispatch, searchTerm)} primaryText='Volunteers' />
      </List>
    </Popover>
  )
}

const onSearchClick = (dispatch, searchTerm) => () => {
  if (!searchTerm) return dispatch(setUserSearchResults(null));
  dispatch(setSearchCategoriesOpen(false));
  dispatch(updateUserSearchResults());
  return browserHistory.push('/users');
}

const mapStateToProps = ({ search }) => ({
  anchor: search.anchor,
  searchTerm: search.searchTerm,
  searchCategoriesOpen: search.searchCategoriesOpen,
});

export default connect(mapStateToProps)(ResultCategoryDropdown);