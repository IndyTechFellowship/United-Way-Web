import React, { Component } from 'react'
import { Card } from 'material-ui/Card'

import AvatarCard from '/imports/ui/components/AvatarCard'
import Skills from '/imports/ui/components/Skills'
import Title from '/imports/ui/components/Title'
import AboutMeTagline from '/imports/ui/views/users/UserBasicInfo/AboutMeTagline'

class UserBasicInfo extends Component {
  render() {
    return (
      <div>
        <Title>About Me & Skills</Title>
        <div style={styles.userInfoBlock}>
          <AvatarCard avatarUrl={this.props.user.avatar ? this.props.user.avatar.original : null} name={this.props.user.firstName + " " + this.props.user.lastName} />
          <div style={styles.aboutMeSkillsBlock}>
            <AboutMeTagline tagline={this.props.user.tagline}/>
            <Card>
              <Skills skills={this.props.user.interests}/>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  userInfoBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  aboutMeSkillsBlock: {
    display: 'flex',
    flexDirection: 'column',
  },
}

export default UserBasicInfo
