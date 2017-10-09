import React, { Component } from 'react'
import { Link } from 'react-router'

import Content from '/imports/ui/components/Content'

class NotFoundPage extends Component {

  render() {
    return (
      <div style={styles.container}>
        <h1>Oops! Page Not Found</h1>
        <span>Try returning to the <Link to="/">homepage</Link>.</span>
      </div>
    )
  }

}

const styles = {
  container: {
    margin: 'auto',
    textAlign: 'center'
  }
}

export default NotFoundPage
