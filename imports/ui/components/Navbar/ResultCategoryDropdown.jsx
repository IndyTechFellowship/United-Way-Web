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
  updateOrganizationSearchResults,
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
        <ListItem
          leftIcon={<SocialPerson />}
           onTouchTap={onOrgSearchClick(dispatch, searchTerm)} 
          primaryText='Search Organizations...' />
        <ListItem 
          leftIcon={<SocialPerson />}
          onTouchTap={onOrgSearchClick(dispatch, searchTerm)}
          primaryText='Search Positions...' />
        <ListItem 
          leftIcon={<SocialPerson />} 
          onTouchTap={onUserSearchClick(dispatch, searchTerm)} 
          primaryText='Search Volunteers...' />
      </List>
    </Popover>
  )
}

const onOrgSearchClick = (dispatch, searchTerm) => () => {
  if (!searchTerm) return dispatch(setOrganizationSearchResults(null));
  dispatch(setSearchCategoriesOpen(false));
  dispatch(updateOrganizationSearchResults());
  return browserHistory.push('/organizations');
}

const onUserSearchClick = (dispatch, searchTerm) => () => {
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