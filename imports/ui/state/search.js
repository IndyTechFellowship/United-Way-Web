import _ from 'lodash'
import { Meteor } from 'meteor/meteor'

export const SET_FULL_TEXT_SEARCH_ANCHOR = 'SET_FULL_TEXT_SEARCH_ANCHOR'
export const setFullTextSearchAnchor = (anchor) => ({
  type: SET_FULL_TEXT_SEARCH_ANCHOR,
  anchor,
});

export const SET_FULL_TEXT_SEARCH_ERROR = 'SET_FULL_TEXT_SEARCH_ERROR'
export const setFullTextSearchError = (searchError) => ({
  type: SET_FULL_TEXT_SEARCH_ERROR,
  searchError,
})

export const SET_FULL_TEXT_SEARCH_FILTER_TOGGLE = 'SET_FULL_TEXT_SEARCH_FILTER_TOGGLE'
export const setFullTextSearchFilterToggle = (toggle, toggled) => ({
  type: SET_FULL_TEXT_SEARCH_FILTER_TOGGLE,
  toggle,
  toggled,
})

export const SET_ORGANIZATION_SEARCH_RESULTS = 'SET_ORGANIZATION_SEARCH_RESULTS'
export const setOrganizationSearchResults = (searchResults) => ({
  type: SET_ORGANIZATION_SEARCH_RESULTS,
  searchResults,
})

export const SET_USER_SEARCH_RESULTS = 'SET_USER_SEARCH_RESULTS'
export const setUserSearchResults = (searchResults) => ({
  type: SET_USER_SEARCH_RESULTS,
  searchResults,
})

export const SET_FULL_TEXT_SEARCH_RESULTS_LOADING = 'SET_FULL_TEXT_SEARCH_RESULTS_LOADING'
export const setFullTextSearchResultsLoading = (searchResultsLoading) => ({
  type: SET_FULL_TEXT_SEARCH_RESULTS_LOADING,
  searchResultsLoading,
})

export const SET_FULL_TEXT_SEARCH_TERM = 'SET_FULL_TEXT_SEARCH_TERM'
export const setFullTextSearchTerm = (searchTerm) => ({
  type: SET_FULL_TEXT_SEARCH_TERM,
  searchTerm,
})

export const SET_SEARCH_CATEGORIES_OPEN = 'SET_SEARCH_CATEGORIES_OPEN'
export const setSearchCategoriesOpen = (open) => ({
  type: SET_SEARCH_CATEGORIES_OPEN,
  searchCategoriesOpen: open,
})

export const updateOrganizationSearchResults = () => (
  (dispatch, getState) => {
    dispatch(setFullTextSearchResultsLoading(true));
    Meteor.call('Search.Organizations.FullText', getState().search.searchTerm, {}, (err, results) => {
      dispatch(setFullTextSearchResultsLoading(false));
      if (err) return dispatch(setFullTextSearchError(err.reason));
      else return dispatch(setOrganizationSearchResults(results));
    })
  }
);

export const updateUserSearchResults = () => (
  (dispatch, getState) => {
    dispatch(setFullTextSearchResultsLoading(true));
    Meteor.call('Search.Users.FullText', getState().search.searchTerm, {}, (err, results) => {
      dispatch(setFullTextSearchResultsLoading(false))
      if (err) return dispatch(setFullTextSearchError(err.reason))
      else return dispatch(setUserSearchResults(results))
    })
  }
);

const initialState = {
  anchor: null,
  organizationResults: null,
  searchError: null,
  searchFilters: {
    organizations: true,
    positions: true,
    users: true,
  },
  searchResultsLoading: false,
  searchCategoriesOpen: false,
  searchTerm: '',
  userResults: null,
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FULL_TEXT_SEARCH_ANCHOR:
      return {...state, anchor: action.anchor}
    case SET_FULL_TEXT_SEARCH_ERROR:
      return {...state, searchError: action.searchError}
    case SET_FULL_TEXT_SEARCH_FILTER_TOGGLE:
      state.searchFilters[action.toggle] = action.toggled;
      return {...state,
        searchFilters: {...state.searchFilters,
          [action.toggle]: action.toggled,
        },
      };
    case SET_ORGANIZATION_SEARCH_RESULTS:
      return {...state, organizationResults: action.searchResults}
    case SET_USER_SEARCH_RESULTS:
      return {...state, userResults: action.searchResults}
    case SET_FULL_TEXT_SEARCH_RESULTS_LOADING:
      return {...state, searchResultsLoading: action.searchResultsLoading}
    case SET_FULL_TEXT_SEARCH_TERM:
      return {...state, searchTerm: action.searchTerm}
    case SET_SEARCH_CATEGORIES_OPEN:
      return {...state, searchCategoriesOpen: action.searchCategoriesOpen}
    default:
      return state
  }
}