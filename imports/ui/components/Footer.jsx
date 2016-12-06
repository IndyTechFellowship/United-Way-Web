import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <div style={styles.footerContainer}>
        <div style={styles.innerBlock}>
          <span>&copy; 2017 All Rights Reserved</span>
          <span>United Way of Central Indiana</span>
          <span>Website by Indy Tech Fellowship</span>
        </div>
        <div style={styles.outerBlock}>
          <div style={styles.innerBlock}>
            <span>Contact UWCI</span>
            <span>community@uwci.org</span>
            <span>(317) 923-1466</span>
          </div>
          <div style={styles.innerBlock}>
            <span>3901 N. Meridian Street</span>
            <span>P.O. Box 88409</span>
            <span>Indianapolis, IN 46208</span>
          </div>
        </div>
      </div>
    )
  }

}

const styles =  {
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: 'gray',
    color: 'white',
    height: '80px',
    width: '100vw',
  },

  innerBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '10px',
  },

  outerBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
}

export default Footer
