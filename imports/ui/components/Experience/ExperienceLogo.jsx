import React, { Component } from 'react'

class ExperienceLogo extends Component {

  render() {
    return (
      <div>
        <img style={styles.img} src={`https://logo.clearbit.com/${this.props.companyName.replace(/ /g, '')}.com`} />
      </div>
    )
  }
}

const styles = {
  img: {
    maxWidth: '50px',
    maxHeight: '50px',
  },
}

export default ExperienceLogo
