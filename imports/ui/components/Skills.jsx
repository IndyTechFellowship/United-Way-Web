import React, {Component} from 'react'

import {Chip} from 'material-ui'

class Skills extends Component {

  render() {
    let skills = this.props.skills.map((skill) => {
      return <Chip key={skill._id} style={styles.chip}>{skill.name}</Chip>
    })
    return (
        <div style={styles.skillsBox}>
          {skills}
        </div>
    )
  }
}

const fakeSkillPills = ['leadership', 'cat-walking', 'netflix & chillin',
  'rbf', 'keeping the redbull can', 'emoji expert']

const styles = {
  skillsBox: {
    width: '250px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    margin: '5px',
    flexBasis: 'fit-content',
  },
}

export default Skills
