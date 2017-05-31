import React, { Component } from 'react'
import { Link } from 'react-router'

const styles = {
  link: {
    color: '#0091ea',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  breadcrumbs: {
    fontSize: '20px',
    margin: '24px 0'
  }
}

class Breadcrumbs extends Component {

  render() {
    const crumbs = this.props.crumbs.map((crumb) => {
      const arrow = crumb === this.props.crumbs[this.props.crumbs.length-1] ? null : ' > ' 
      return crumb.path ? 
        <span><Link to={crumb.path} style={styles.link}>{ crumb.text }</Link>{arrow}</span>
      :
        <span>{ crumb.text }{arrow}</span>
    })
    return (
      <div style={styles.breadcrumbs}>
        {crumbs}
      </div>
    )
  }

}

export default Breadcrumbs