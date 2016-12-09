import React, { Component } from 'react'

import AboutMeTagline from '/imports/ui/components/UserProfileAboutMe/AboutMeTagline'
import Skills from '/imports/ui/components/UserProfileAboutMe/Skills'

class UserBasicInfo extends Component {
  render() {
    return (
        <div style={styles.userInfoBlock}>
          <div>Profile Picture</div>
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
