import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { Colors } from '/imports/ui/styles';

import SearchFiltering from './SearchFiltering'
import SearchResultsContent from './SearchResultsContent'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    padding: '16px',
  },
  filter: {
    flex: '1',
  },
  results: {
    flex: '3',
  },
}

class SearchPage extends Component {

  render() {
    const { searchResults } = this.props
    return (
      <div style={styles.container}>
        <div style={styles.filter}>
          <SearchFiltering />
        </div>
        <div style={styles.results}>
          <SearchResultsContent searchResults={searchResults} />
        </div>
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
