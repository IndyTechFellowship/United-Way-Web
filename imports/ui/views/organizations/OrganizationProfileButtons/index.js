import React, { Component } from 'react'

class OrganizationProfileButtons extends Component {
  render() {
    return (
      <div style={styles.buttons}>
        {/* TODO: V2 Feature */}
        {/*<RaisedButton */}
          {/*label="Bookmark" */}
          {/*style={styles.button} */}
          {/*labelColor='white'*/}
          {/*backgroundColor={lightBlue800} */}
        {/*/>*/}
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
