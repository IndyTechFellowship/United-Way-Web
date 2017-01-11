import { FlatButton } from 'material-ui';
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
      <div>
        <FlatButton label="Google" onTouchTap={this.onClickGoogleLogin.bind(this)} />
        <FlatButton label="Facebook" onTouchTap={this.onClickFacebookLogin.bind(this)} />
        <FlatButton label="LinkedIn" onTouchTap={this.onClickLinkedinLogin.bind(this)} />
      </div>
    );
  }

}

export default SsoButtons;