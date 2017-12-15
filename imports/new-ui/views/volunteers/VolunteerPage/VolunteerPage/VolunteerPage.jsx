import React, { Component } from 'react';

import Loader from '/imports/new-ui/components/Loader'
import EditVolunteerPage from './EditVolunteerPage'
import ViewVolunteerPage from './ViewVolunteerPage'

class VolunteerPage extends Component {

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
      return <div style={styles.content}><EditVolunteerPage {...this.props} /></div>
    } else {
      return <div style={styles.content}><ViewVolunteerPage {...this.props} /></div>
    }
  }
}

const styles = {
  content: {
    width: '960px',
    margin: '0 auto'
  }
}

export default VolunteerPage