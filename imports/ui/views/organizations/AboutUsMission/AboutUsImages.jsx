import React, { Component } from 'react'

class AboutUsImages extends Component {
  render() {
    return (
      <div style={styles.images}>
        {this.props.images.map((image, index) =>
          <div key={index} src={image} style={
              Object.assign(
                {background: `url(${image})`},
                styles.image
              )}
          />
        )}
      </div>
    )
  }
}

const styles = {
  images: {
    display: 'flex',
  },
  image: {
    height: '125px',
    flexBasis: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
}

export default AboutUsImages
