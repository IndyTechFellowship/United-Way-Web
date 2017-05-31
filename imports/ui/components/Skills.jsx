import React, { Component } from 'react'

import { Chip } from 'material-ui'
import { lightBlue800 } from 'material-ui/styles/colors'

class Skills extends Component {

  render() {
    let skills = this.props.skills.map((skill) => {
      return (
        <div key={skill._id} style={styles.chip}>
          {skill.name}
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
    padding: '8px',
  },
  chip: {
    padding: '8px',
    overflow: 'auto',
    borderRadius: '0',
    background: lightBlue800,
    color: 'white',
    margin: '4px',
    fontSize: '14px',
  },
}

export default Skills
