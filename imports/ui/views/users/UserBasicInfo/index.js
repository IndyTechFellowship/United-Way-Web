import _ from 'lodash'
import React, { Component } from 'react'
import { Card, TextField } from 'material-ui'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

import AvatarCard from '/imports/ui/components/AvatarCard'
import EditButton from '/imports/ui/components/EditButton'
import Skills from '/imports/ui/components/Skills'
import Title from '/imports/ui/components/Title'
import AboutMeTagline from '/imports/ui/views/users/UserBasicInfo/AboutMeTagline'

class UserBasicInfo extends Component {
  constructor(props) {
    super(props)
    let skillsArray = this.props.user.profile.skills
    this.state = {
      isEditing: false,
      firstName: this.props.user.profile.firstName,
      lastName: this.props.user.profile.lastName,
      tagline: this.props.user.profile.tagline,
      skills: _.fill(skillsArray, null, skillsArray.length-1, 5)
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.selectSkill = this.selectSkill.bind(this)
  }

  selectionRenderer(values) {
    return "hello"
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

  selectSkill(index, selectedIndex) {
    const newSkill = this.props.tags[selectedIndex]
    let skills = _.cloneDeep(this.state.skills)
    skills[index] = _.cloneDeep(newSkill)
    this.setState({ skills: skills })
  }

  render() {
    const { user, tags } = this.props
    const viewing = <div style={styles.userInfoBlock}>
                      <AvatarCard avatarUrl={user.profile.avatar ? user.profile.avatar.original : null} title={<span>{this.state.firstName}<br />{this.state.lastName}</span>} />
                      <div style={styles.aboutMeSkillsBlock}>
                        <AboutMeTagline tagline={this.state.tagline}/>
                        <Card>
                          <Skills skills={_.compact(this.state.skills)}/>
                        </Card>
                      </div>
                    </div>

    const skills = this.state.skills.map((skill, index) => (
      <SelectField
        key={index}
        floatingLabelText={index === 0 ? "Skills" : null}
        hintText="Select Skill"
        value={skill ? skill.name : null}
        fullWidth={true}
        onChange={(e, selectedIndex) => this.selectSkill(index, selectedIndex)}
      >
        {tags.map(tag => (
          <MenuItem
            key={tag._id}
            insetChildren={true}
            checked={tag === skill}
            value={tag.name}
            primaryText={tag.name}
          />
        ))
        }
      </SelectField>
    ))
                    
    const editing = <div style={styles.edit}>
                      <div style={styles.column}>
                        <TextField
                          hintText="First Name"
                          floatingLabelText="First Name"
                          floatingLabelFixed={true}
                          value={this.state.firstName}
                          onChange={e => this.setState({ firstName: e.target.value })}
                          fullWidth={true}
                        />
                        <TextField
                          hintText="Last Name"
                          floatingLabelText="Last Name"
                          floatingLabelFixed={true}
                          value={this.state.lastName}
                          onChange={e => this.setState({ lastName: e.target.value })}
                          fullWidth={true}
                        />
                      </div>
                      <div style={styles.middle}></div>
                      <div style={styles.column}>
                        <TextField
                          hintText="Software Engineer at Google"
                          floatingLabelText="Tagline"
                          floatingLabelFixed={true}
                          value={this.state.tagline}
                          onChange={e => this.setState({ tagline: e.target.value })}
                          fullWidth={true}
                          multiLine={true}
                          rows={2}
                        />
                        {skills}
                      </div>
                    </div>

    return (
      <div style={styles.container}>
        <Title>About Me & Skills</Title>
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
    marginBottom: '24px',
    position: 'relative'
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
  userInfoBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  aboutMeSkillsBlock: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '24px'
  },
}

export default UserBasicInfo
