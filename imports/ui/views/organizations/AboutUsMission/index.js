import _ from 'lodash'
import React, { Component } from 'react'

import AboutUsImages from '/imports/ui/views/organizations/AboutUsMission/AboutUsImages'
import EditButton from '/imports/ui/components/EditButton'
import Title from '/imports/ui/components/Title'

class AboutUsMission extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      description: this.props.organization.description
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
  }

  edit() {
    this.setState({ isEditing: true })
  }

  save() {
    this.setState({ isEditing: false })
    const organization = {
      description: this.state.description 
    }
    let newOrganization = _.merge({}, this.props.organization, organization)
    Meteor.call('Organization.update', newOrganization, (err, resp) => {})
  }
  
  render() {
    const editing = (
      <div>
        <textarea style={styles.textarea} value={this.state.description} onChange={e => this.setState({ description: e.target.value })} />
      </div>
    )
    const viewing = (
      <div>
        <AboutUsImages images={this.props.organization.imageUrls} />
        {this.state.description ?
          <div>
            {this.state.description}
          </div>
        :
          <div style={styles.empty}>No Mission Added</div>
        }
      </div>
    )

    return (
      <div style={styles.container}>
        <Title>About Us & Our Mission</Title>
        <EditButton
          isEditing={this.state.isEditing}
          edit={this.edit}
          save={this.save}
        />
        {this.state.isEditing ? editing : viewing}
      </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative'
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

export default AboutUsMission
