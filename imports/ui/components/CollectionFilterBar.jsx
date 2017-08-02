import { Row } from 'jsxstyle'
import { FlatButton } from 'material-ui'
import ContentClear from 'material-ui/svg-icons/content/clear';
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

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

const CollectionFilterBar = ({ clearFilters, isTextFiltered, searchTerm }) => {
  return (
    <Row style={styles.container}>
      {isTextFiltered && searchTerm
        ? <span style={styles.filterText}>Search for "{searchTerm}"</span>
        : <span style={styles.filterText}>All Results</span>}
      <FlatButton
        icon={<ContentClear />}
        onTouchTap={() => clearFilters()} />
    </Row>
  )
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