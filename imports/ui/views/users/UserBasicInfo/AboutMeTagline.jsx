import React, {Component} from 'react'

class AboutMeTagline extends Component {

  render() {
    return (
        <div style={styles.tagline}>{this.props.tagline}</div>
    )
  }
}

const styles = {
  tagline: {
    marginBottom: '16px',
    fontSize: '18px'
  }
}

export default AboutMeTagline
