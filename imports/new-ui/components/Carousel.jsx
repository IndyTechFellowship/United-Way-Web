import React, { Component } from 'react'
import Slider from 'react-slick'

export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      swipe: false,
      arrows: true,
      dots: true,
      infinite: false
    }

    return (
      <div style={styles.slider}>
        <Slider ref={c => this.slider = c } {...settings}>
          {this.props.cards}
        </Slider>
      </div>
    )
  }
}

const styles = {
  slider: {
    margin: '0 30px',
    position: 'relative'
  }
}