import React, { Component } from 'react'

import Slider from 'react-slick'

export default class Carousel extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      nextArrow: <NextArrowCustom/>,
      prevArrow: <PrevArrowCustom/>
    };

    return (
      <div>
        <Slider {...settings}>
          {this.props.cards}
        </Slider>
      </div>
    )
  }
}

class NextArrowCustom extends Component {
  render() {
    return <div {...this.props} style={styles.arrow} ></div>
  }
}

class PrevArrowCustom extends Component {
  render() {
    return <div {...this.props} style={styles.arrow} ></div>
  }
}

const styles = {
  arrow: {
    backgroundColor: 'blue'
  },

  block: {
    backgroundColor: 'blue',
    width: '200px'
  }
}

