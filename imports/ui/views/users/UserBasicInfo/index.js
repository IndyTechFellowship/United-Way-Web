import React, { Component } from 'react'
import { Card, TextField } from 'material-ui'

import AvatarCard from '/imports/ui/components/AvatarCard'
import EditButton from '/imports/ui/components/EditButton'
import Skills from '/imports/ui/components/Skills'
import Title from '/imports/ui/components/Title'
import AboutMeTagline from '/imports/ui/views/users/UserBasicInfo/AboutMeTagline'

class UserBasicInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false
    }
    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
  }

  edit() {
    this.setState({ isEditing: true })
    console.log("edit")
  }

  save() {
    this.setState({ isEditing: false })
    console.log("Save")
  }

  render() {
    const { user } = this.props
    const viewing = <div style={styles.userInfoBlock}>
                      <AvatarCard avatarUrl={this.props.user.avatar ? this.props.user.avatar.original : null} firstName={this.props.user.firstName} lastName={this.props.user.lastName} />
                      <div style={styles.aboutMeSkillsBlock}>
                        <AboutMeTagline tagline={this.props.user.tagline}/>
                        <Card>
                          <Skills skills={this.props.user.interests}/>
                        </Card>
                      </div>
                    </div>

    const skills = user.skills.map(skill => (
      <TextField
        value={skill.name}
        fullWidth={true}
      />
    ))
                    
    const editing = <div style={styles.edit}>
                      <div style={styles.column}>
                        <TextField
                          hintText="Name"
                          floatingLabelText="Name"
                          floatingLabelFixed={true}
                          value={user.firstName}
                          fullWidth={true}
                        />
                      </div>
                      <div style={styles.middle}></div>
                      <div style={styles.column}>
                        <TextField
                          hintText="Software Engineer at Google"
                          floatingLabelText="Tagline"
                          floatingLabelFixed={true}
                          value={user.tagline}
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
