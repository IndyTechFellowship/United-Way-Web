import React, { Component } from 'react';

import Loader from '/imports/new-ui/components/Loader'
import EditOrganizationPage from './EditOrganizationPage'
import ViewOrganizationPage from './ViewOrganizationPage'

class OrganizationPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
  }

  render() {
    const { loading } = this.props
    if (loading) {
      return <Loader />
    } else if (this.state.isEditing) {
      return <div style={styles.content}><EditOrganizationPage {...this.props} /></div>
    } else {
      return <div style={styles.content}><ViewOrganizationPage {...this.props} /></div>
    }
  }
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto'
  }
}

export default OrganizationPage