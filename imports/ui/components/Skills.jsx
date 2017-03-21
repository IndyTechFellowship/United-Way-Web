import React, { Component } from 'react'

import { Chip } from 'material-ui'

class Skills extends Component {

  render() {
    let skills = this.props.skills.map((skill) => {
      return (
        <div key={skill._id} style={styles.chip}>
          <Chip>{skill.name}</Chip>
        </div>
      )
    })
    return (
        <div style={styles.skillsBox}>
          {skills}
        </div>
    )
  }
}

const styles = {
  skillsBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  chip: {
    padding: '5px',
    overflow: 'auto'
  },
}

export default Skills
