import _ from 'lodash'
import React, { Component } from 'react'

import { Card, RaisedButton, TextField } from 'material-ui'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import EditButton from '/imports/ui/components/EditButton'
import Skills from '/imports/ui/components/Skills'
import Title from '/imports/ui/components/Title'
import AvatarCard from '/imports/ui/components/AvatarCard'

class OrganizationBasicInfo extends Component {
  constructor(props) {
    super(props)
    let tagsArray = _.cloneDeep(this.props.organization.tags)
    let emptyTags = [null, null, null, null, null, null]
    this.state = {
      isEditing: props.isEditing || false,
      name: this.props.organization.name,
      tagline: this.props.organization.tagline,
      city: this.props.organization.city,
      state: this.props.organization.state,
      tags: _.merge(emptyTags, tagsArray)
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
    const organization = {
      name: this.state.name,
      tagline: this.state.tagline,
      city: this.state.city,
      state: this.state.state,
      tags: this.state.tags
    }
    let newOrganization = _.merge({}, this.props.organization, organization)
    Meteor.call('Organization.update', newOrganization, (err, resp) => {
    })
  }


  selectTag(index, selectedIndex) {
    const newTag= this.props.tags[selectedIndex]
    let tags = _.cloneDeep(this.state.tags)
    tags[index] = _.cloneDeep(newTag)
    this.setState({ tags: tags })
  }

  render() {
    const { tags } = this.props
    const orgTags = this.state.tags.map((orgTag, index) => (
      <SelectField
        key={index}
        style={styles.select}
        floatingLabelText={index === 0 ? "Tags" : null}
        floatingLabelFixed={true}
        hintText="Select Tag"
        value={orgTag ? orgTag.name : null}
        fullWidth={true}
        onChange={(e, selectedIndex) => this.selectTag(index, selectedIndex)}
      >
        {tags.map(tag => (
          <MenuItem
            key={tag._id}
            insetChildren={true}
            checked={tag === orgTag}
            value={tag.name}
            primaryText={tag.name}
          />
        ))
        }
      </SelectField>
    ))

    const editing = (
      <div style={styles.edit}>
        <div style={styles.column}>
          one
        </div>
        <div style={styles.middle}></div>
        <div style={styles.column}>
          <TextField
            hintText="Indianapolis"
            floatingLabelText="City"
            floatingLabelFixed={true}
            value={this.state.city}
            onChange={e => this.setState({ city: e.target.value })}
            fullWidth={true}
          />
          <TextField
            hintText="Indiana"
            floatingLabelText="State"
            floatingLabelFixed={true}
            value={this.state.state}
            onChange={e => this.setState({ state: e.target.value })}
            fullWidth={true}
          />
          {orgTags}
        </div>
      </div>
    )
    const viewing = (
      <div style={styles.twoColumnLayout}>
        <div style={styles.outerContainer}>
          <div style={styles.column}>
            <AvatarCard avatarUrl={this.props.organization.avatarUrl} title={this.props.organization.name} />
          </div>
          <div style={styles.middle}></div>
          <div style={styles.column}>
            <div style={styles.details}>
              <div>
                <div>{this.state.tagline}</div>
                <div>{this.state.city}</div>
                <div>{this.state.state}</div>
              </div>
              <Card>
                {
                  _.compact(this.state.tags).length > 0 ?
                    <Skills skills={_.compact(this.state.tags)} />
                  :
                    <div style={styles.noTags}>No Tags Added</div>
                }
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div style={styles.container}>
        <Title>Basic Information</Title>
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
  container: {
    position: 'relative',
    marginBottom: '24px'
  },
  twoColumnLayout: {
    display: 'flex',
    flexDirection: 'column'
  },
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  edit: {
    display: 'flex'
  },
  column: {
    flexBasis: '48%'
  },
  middle: {
    flexBasis: '4%'
  },
  select: {
    width: '100%',
    overflow: 'hidden'
  },
  noTags: {
    color: '#9b9b9b',
    padding: '16px'
  }
}

export default OrganizationBasicInfo
