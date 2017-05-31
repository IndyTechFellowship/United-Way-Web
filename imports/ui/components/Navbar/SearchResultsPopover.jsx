import { Col } from 'jsxstyle';
import { 
  Divider,
  Popover,
} from 'material-ui';
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { Colors } from '/imports/ui/styles';
import {
  setFullTextSearchResultsOpen,
  setFullTextSearchTerm,
} from '/imports/ui/state';

import UserResult from './results/UserResult';

const styles = {
  popover: {
    width: '40%',
  },
  resultContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  resultItem: {
    padding: '8px',
  },
  divider: {
    backgroundColor: Colors.lightGrey,
    height: '1px',
    width: '100%',
  }
};

const SearchResultsPopover = ({ anchor, dispatch, searchResults, searchResultsOpen }) => {
  return (
    <Popover
      anchorEl={anchor}
      open={searchResultsOpen}
      onRequestClose={() => dispatch(setFullTextSearchResultsOpen(false))}
      style={styles.popover}>
      <Col>
        {_.map(searchResults, (r, i) => (
          <div className='resultItem' key={i} onClick={onClick(dispatch, r)} style={styles.resultContainer}>
            {i !== 0 ? <div style={styles.divider}></div> : null}
            <div style={styles.resultItem}>{renderResult(r, i)}</div>
          </div>
        ))}
      </Col>
    </Popover>
  );
}

const renderResult = (r, i) => {
  if (r._type === 'Organizations') {
    return <span key={i}>{`Organization: ${r.name}`}</span>
  } else if (r._type === 'Users') {
    return <UserResult key={i} user={r} />
  }
}

const onClick = (dispatch, r) => {
  if (r._type === 'Organizations') {
    return null;
  } else if (r._type === 'Users') {
    return () => {
      dispatch(setFullTextSearchTerm(''))
      dispatch(setFullTextSearchResultsOpen(false))
      browserHistory.push(`/users/${r._id}`)
    }
  }
}

SearchResultsPopover.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

const mapStateToProps = ({ search }) => ({
  anchor: search.anchor,
  searchResults: search.searchResults,
  searchResultsOpen: search.searchResultsOpen,
});

export default connect(mapStateToProps)(SearchResultsPopover)