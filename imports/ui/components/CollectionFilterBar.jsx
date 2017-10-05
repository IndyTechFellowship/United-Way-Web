import { Row } from 'jsxstyle'
import { FlatButton } from 'material-ui'
import ContentClear from 'material-ui/svg-icons/content/clear';
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { Colors } from '/imports/ui/styles'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    padding: '16px'
  },
  filterText: {
    color: Colors.mediumGrey,
  },
}

const CollectionFilterBar = ({ clearFilters, isTextFiltered, searchTerm }) => {
  return isTextFiltered && searchTerm ?
    <div style={styles.container}>
      <div style={styles.filterText}>Search for "{searchTerm}"</div>
      <FlatButton
        icon={<ContentClear />}
        onTouchTap={() => clearFilters()} 
      />
    </div>
  :
    null
}

CollectionFilterBar.propTypes = {
  clearFilters: PropTypes.func.isRequired,
  isTextFiltered: PropTypes.bool.isRequired,
  searchTerm: PropTypes.string,
}

const mapStateToProps = ({ search }) => ({
  searchTerm: search.searchTerm,
})

export default connect(mapStateToProps)(CollectionFilterBar);