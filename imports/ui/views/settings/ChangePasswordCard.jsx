import { Col } from 'jsxstyle'
import { 
  Card,
  CardHeader,
  RaisedButton,
  TextField,
} from 'material-ui'
import Lock from 'material-ui/svg-icons/action/lock';
import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = { 
  body: {
    alignItems: 'flex-end',
    padding: '0px 24px 24px 24px',
  }
};

class ChangePasswordCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      new1: '',
      new2: '',
    };
  }

  render() {
    return (
      <Card>
        <CardHeader 
          avatar={<Lock />}
          title='Change Password'
          subtitle='Access BoardServe Indy With A New Password'
        />
        <Col style={styles.body}>
          <TextField
            fullWidth={true}
            hintText='Enter Your Current Password'
            onChange={(e, current) => this.setState({ current })}
            type='password'
            value={this.state.current}
          />
          <TextField
            fullWidth={true}
            hintText='Enter Your New Password'
            onChange={(e, new1) => this.setState({ new1 })}
            type='password'
            value={this.state.new1}
          />
          <TextField
            fullWidth={true}
            hintText='Enter Your New Password Again'
            onChange={(e, new2) => this.setState({ new2 })}
            type='password'
            value={this.state.new2}
          />
          <RaisedButton
            label='Submit'
            primary={true}
          />
        </Col>
      </Card>
    );
  }

}

export default ChangePasswordCard;
