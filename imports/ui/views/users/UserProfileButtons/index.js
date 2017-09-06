import React, { Component } from 'react'
import RecommendButton from "/imports/ui/components/RecommendButton";

class UserProfileButtons extends Component {
  render() {
    return (
      <div style={styles.buttons}>
        <div style={styles.button}>
          <RecommendButton volunteer={this.props.user}/>
        </div>

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
    height: '36px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button:  {
    width: '50%'
  }
}

export default UserProfileButtons
