import React, { Component } from 'react'

import AvatarCard from '/imports/ui/components/AvatarCard'
import Skills from '/imports/ui/components/Skills'
import Title from '/imports/ui/components/Title'
import AboutMeTagline from '/imports/ui/views/users/UserBasicInfo/AboutMeTagline'

class UserBasicInfo extends Component {
  render() {
    return (
        <div style={styles.userInfoBlock}>
          <AvatarCard avatarUrl={this.props.avatarUrl} name={this.props.name} />
          <div style={styles.aboutMeSkillsBlock}>
            <Title>About Me & Skills</Title>
            <AboutMeTagline/>
            <Skills/>
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
