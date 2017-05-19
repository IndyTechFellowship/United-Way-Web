import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class SearchPage extends Component {

  render() {
    const {
      searchResults
    } = this.props
    return (
      <div>
        {searchResults.map(sr => (
          <div key={sr._id}>{sr._id} {sr.type} {sr.name} {sr.score}</div>
        ))}
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
