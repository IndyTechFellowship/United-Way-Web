import _ from 'lodash';
import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

const styles = {
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: '1',
    margin: '16px 24px 16px 8px',
  },
  icon: {
    color: 'white',
    marginRight: '4px',
  },
  textField: {
    color: 'white',
  },
}

export default class SearchBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  componentDidMount() {
    this.setState({ query: '' })
  }

  render() {
    return (
      <div style={styles.container}>
        <div className="pt-input-group search">
          <span className="pt-icon pt-icon-search"></span>
          <input
            className="pt-input"
            placeholder="Search..."
            type="text"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                this.setState({ query: '' })
                browserHistory.push(`/search?q=${this.state.query}`)
              }
            }}
            onChange={(e) => this.setState({ query: e.target.value })}
            value={this.state.query}
          />
        </div>
      </div>
    )
  }
}