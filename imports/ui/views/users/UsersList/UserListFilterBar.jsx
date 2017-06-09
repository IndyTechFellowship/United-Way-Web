import { Row } from 'jsxstyle'
import {
  FlatButton,
} from 'material-ui'
import ContentClear from 'material-ui/svg-icons/content/clear';
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  setUserSearchResults,
} from '/imports/ui/state'
import { Colors } from '/imports/ui/styles'

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    margin: '8px',
    padding: '24px',
    width: '100%',
  },
  filterText: {
    color: Colors.mediumGrey,
  },
}

const UserListFilterBar = ({ dispatch, isTextFiltered }) => {
  return (
    <Row style={styles.container}>
      {isTextFiltered
        ? <span style={styles.filterText}>Text Filtered</span>
        : <span style={styles.filterText}>No Text Filter</span>}
      
      <FlatButton
        icon={<ContentClear />}
        onTouchTap={onXClick(dispatch)} />
    </Row>
  )
}

const onXClick = (dispatch) => () => {
  dispatch(setUserSearchResults(null))
}

UserListFilterBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isTextFiltered: PropTypes.bool.isRequired,
}

const mapStateToProps = {
  
}

export default connect()(UserListFilterBar);