import React, { Component } from 'react'
import { lightBlue800 } from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'

class OrganizationProfileButtons extends Component {
  render() {
    return (
      <div style={styles.buttons}>
        <RaisedButton 
          label="Show Interest" 
          style={styles.button} 
          labelColor='white'
          backgroundColor={lightBlue800}
        />
        <RaisedButton 
          label="Bookmark" 
          style={styles.button} 
          labelColor='white'
          backgroundColor={lightBlue800} 
        />
      </div>
    )
  }
}

const styles = {
  buttons: {
    margin: '24px 0',
    textAlign: 'right',
  },
  button: {
    marginLeft: '16px',
    width: '140px',
  }
}

export default OrganizationProfileButtons
