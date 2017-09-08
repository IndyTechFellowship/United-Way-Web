import _ from 'lodash'
import React, { Component } from 'react'

import { Card, RaisedButton, TextField } from 'material-ui'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import EditButton from '/imports/ui/components/EditButton'
import Skills from '/imports/ui/components/Skills'
import Title from '/imports/ui/components/Title'
import AvatarCard from '/imports/ui/components/AvatarCard'
import { CloudinaryTransformToAvatar } from '/imports/helpers/images';

class OrganizationBasicInfo extends Component {
  constructor(props) {
    super(props)
    let tagsArray = _.cloneDeep(this.props.organization.tags)
    this.state = {
      isEditing: props.isEditing || false,
      name: this.props.organization.name,
      tagline: this.props.organization.tagline,
      city: this.props.organization.city,
      state: this.props.organization.state,
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

  onClickUplaod() {
    cloudinary.openUploadWidget({ 
      cloud_name: Meteor.settings.public.cloudinary.cloudName, 
      upload_preset: Meteor.settings.public.cloudinary.uploadPreset,
    }, (error, result) => {
      if (error) console.error(error);
      else {
        Meteor.call('Organizations.setAvatar', result[0].url, () => {
          this.save();
        });
      }
    });
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
        floatingLabelText={index === 0 ? "Tags" : null}
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
        <div onClick={this.onClickUplaod.bind(this)} style={styles.dropzone}>
          <span>Upload Image</span>
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
            <AvatarCard 
              avatarUrl={CloudinaryTransformToAvatar(this.props.organization.avatarUrl)}
              title={this.props.organization.name} />
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
                <Skills skills={_.compact(this.state.tags)}/>
              </Card>
            </div>
          </div>
        </div>
        <div style={styles.buttonContainer}>
          <RaisedButton label="Follow Organization" />
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
  dropzone: {
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#C0C0C0',
    display: 'flex',
    flexDirection: 'column',
    height: "200px",
    justifyContent: 'center',
    width: '100%'
  },
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
    display: 'flex',
    flexDirection: 'column',
  },
  column: {
    flexBasis: '48%'
  },
  middle: {
    flexBasis: '4%'
  },
}

export default OrganizationBasicInfo
