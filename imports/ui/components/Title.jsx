import React, { Component } from 'react'

const styles = {
  title: {
    fontSize: '20px',
    color: '#0091ea',
    marginBottom: '16px',
  },
}

class Title extends Component {

  render() {
    return (
      <div style={styles.title}>
        {this.props.children}
      </div>
    )
  }

}

export default Title
