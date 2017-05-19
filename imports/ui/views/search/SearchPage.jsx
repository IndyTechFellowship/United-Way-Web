import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Colors } from '/imports/ui/styles';

import SearchResultsContent from './SearchResultsContent'

const styles = {
  background: {
    
  }
}

class SearchPage extends Component {

  render() {
    const { searchResults } = this.props
    return (
      <div style={styles.background}>
        <SearchResultsContent searchResults={searchResults} />
      </div>
    )
  }

}

SearchPage.propTypes = {
  searchResults: PropTypes.array.isRequired,
}

const mapStateToProps = ({ search }) => ({
  searchResults: search.searchResults,
})

export default connect(mapStateToProps)(SearchPage)
