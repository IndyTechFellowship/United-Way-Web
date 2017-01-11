import React, {Component} from 'react'

export default class ExperienceLogo extends Component {

  //TODO: implement clearbit to pull logo image
  render() {
    return (
      <div>
        <img src={this.props.logoUrl} style={styles.img}/>
      </div>
    )
  }
}

const styles = {
  img: {
    width: '100px',
  },
}