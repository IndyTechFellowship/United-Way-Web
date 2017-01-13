import RaisedButton from 'material-ui/RaisedButton'
import React, { Component } from 'react';

class SsoButtons extends Component {

  onClickGoogleLogin() {
    Meteor.loginWithGoogle({}, (err) => {
      if (err) console.error(err);
    });
  }

  onClickFacebookLogin() {
    Meteor.loginWithFacebook({}, (err) => {
      if (err) console.error(err);
    });
  }

  onClickLinkedinLogin() {
    Meteor.loginWithLinkedin({}, (err) => {
      if (err) console.error(err);
    })
  }

  render() {
    return (
      <div style={socialLoginStyle} >
        <RaisedButton style={raisedButtonStyle} label="Login with LinkedIn" onTouchTap={this.onClickLinkedinLogin.bind(this)}/>
        <RaisedButton style={raisedButtonStyle} label="Login with Facebook" onTouchTap={this.onClickFacebookLogin.bind(this)} />
        <RaisedButton style={raisedButtonStyle} label="Login with Google" onTouchTap={this.onClickGoogleLogin.bind(this)} />
      </div>
    );
  }

}

const socialLoginStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
}
const raisedButtonStyle = {
  margin: 4,
  width: 200
}

export default SsoButtons;