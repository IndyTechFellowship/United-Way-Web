import _ from 'lodash'
import React, {Component} from 'react'

import { RaisedButton } from 'material-ui'

import EditButton from '/imports/ui/components/EditButton'
import OrganizationDetails from './OrganizationDetails'
import Skills from '/imports/ui/components/Skills'
import AvatarCard from '/imports/ui/components/AvatarCard'

class OrganizationBasicInfo extends Component {
  constructor(props) {
    super(props)
    let tagsArray = this.props.organization.tags
    this.state = {
      isEditing: false,
      name: this.props.organization.name,
      tagline: this.props.organization.tagline,
      tags: _.fill(tagsArray, null, tagsArray.length-1, 5)
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.selectTag = this.selectTag.bind(this)
  }

  edit() {
    this.setState({ isEditing: true })
  }

  save() {
    this.setState({ isEditing: false })
    const profile = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      tagline: this.state.tagline,
      skills: this.state.skills
    }
    let newUser = _.merge({}, this.props.user, { profile: profile })
    Meteor.call('User.update', newUser, (err, resp) => {
    })
  }


  selectTag(index, selectedIndex) {
    const newTag= this.props.tags[selectedIndex]
    let tags = _.cloneDeep(this.state.tags)
    tags[index] = _.cloneDeep(newTag)
    this.setState({ tags: tags })
  }

  render() {
    const editing = (
      <div>hello</div>
    )
    const viewing = (
      <div style={styles.twoColumnLayout}>
        <div style={styles.outerContainer}>
          <div style={styles.column}>
            <AvatarCard avatarUrl={this.props.organization.avatarUrl} name={this.props.organization.name} />
          </div>
          <div style={styles.column}>
            <div style={styles.details}>
              <OrganizationDetails organization={this.props.organization}/>
              <Skills skills={this.props.organization.tags}/>
            </div>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <RaisedButton label="Follow Organization" fullWidth={true} />
        </div>
      </div>
    )
    return (
      <div>
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

const styles= {
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'column'
  },
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  column: {
    flex: '1 1 50%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}

export default OrganizationBasicInfo
