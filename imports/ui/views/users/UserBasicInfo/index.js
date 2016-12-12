import React, { Component } from 'react'

import UserCard from '/imports/ui/views/users/UserBasicInfo/UserCard'
import AboutMeTagline from '/imports/ui/views/users/UserBasicInfo/AboutMeTagline'
import Skills from '/imports/ui/views/users/UserBasicInfo/Skills'

class UserBasicInfo extends Component {
  render() {
    return (
        <div style={styles.userInfoBlock}>
          <UserCard avatarUrl={this.props.avatarUrl} name={this.props.name} />
          <div style={styles.aboutMeSkillsBlock}>
            <div>About Me & Skills</div>
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
