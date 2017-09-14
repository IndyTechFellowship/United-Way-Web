import _ from 'lodash'
import React, { Component } from 'react'

import EditButton from '/imports/ui/components/EditButton'
import Title from '/imports/ui/components/Title'

class Summary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      summary: this.props.user.profile.summary
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
  }

  edit() {
    this.setState({ isEditing: true })
  }

  save() {
    this.setState({ isEditing: false })
    const profile = {
      summary: this.state.summary
    }
    let newUser = _.merge({}, this.props.user, { profile: profile })
    Meteor.call('User.update', newUser, (err, resp) => {
    })
  }
  
  render() {
    const editing = (
      <div>
        <textarea style={styles.textarea} value={this.state.summary} onChange={e => this.setState({ summary: e.target.value })} />
      </div>
    )
    const viewing = (
      this.state.summary ?
        <div style={styles.summary}>
          {this.state.summary}
        </div>
      :
        <div style={styles.empty}>No Summary Added</div>
    )
    return (
      <div style={styles.container}>
        <Title>Summary</Title>
        {this.props.editable ?
          <EditButton
            isEditing={this.state.isEditing}
            edit={this.edit}
            save={this.save}
          />
        : null
        }
        {this.state.isEditing ? editing : viewing}
      </div>
    )
  }
}

const styles = {
  container: {
    marginBottom: '32px',
    position: 'relative'
  },
  summary: {
    fontSize: '16px',
    fontWeight: 300
  },
  textarea: {
    width: '100%',
    height: '100px',
    fontSize: '14px'
  },
  empty: {
    fontSize: '24px',
    color: '#9b9b9b',
    width: '100%',
    padding: '48px 0',
    textAlign: 'center'
  }
}

export default Summary
