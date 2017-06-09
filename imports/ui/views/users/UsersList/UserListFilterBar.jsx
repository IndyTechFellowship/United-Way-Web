import {
  FlatButton,
} from 'material-ui'
import ContentClear from 'material-ui/svg-icons/content/clear';
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  setUserSearchResults,
} from '/imports/ui/state'

const UserListFilterBar = ({ dispatch }) => {
  return (
    <div>
      <span>FILTERED!</span>
      <FlatButton
        icon={<ContentClear />}
        onTouchTap={onXClick(dispatch)} />
    </div>
  )
}

const onXClick = (dispatch) => () => {
  dispatch(setUserSearchResults(null))
}

UserListFilterBar.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = {

}

export default connect()(UserListFilterBar);