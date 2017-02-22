import React, { Component } from 'react'

import moment from 'moment'

class ExperienceHeader extends Component {

  render() {
    return (
      <div style={styles.header}>
        <div style={styles.title}>{this.props.experience.title}</div>
        <div style={styles.company}>{this.props.experience.companyName}</div>
        <div style={styles.date}>{`${moment(this.props.experience.startDate).format('MM/DD/YYYY')} - ${moment(this.props.experience.endDate).format('MM/DD/YYYY')}`}</div>
      </div>
    )
  }

}

const styles = {
  header: {
    paddingTop: '15px',
    paddingBottom: '15px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  date: {
    fontSize: '15px',
  },
}

export default ExperienceHeader
