import React, { Component } from 'react'

const styles = {
  content: {
    flex: 1,
    width: "80%",
    maxWidth: 1440,
  }
}

class Content extends Component {

  render() {
    return (
      <div style={styles.content}>{ this.props.children }</div>
    )
  }

}

export default Content
