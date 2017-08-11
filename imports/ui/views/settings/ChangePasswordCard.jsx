import { Col, Row } from 'jsxstyle'
import { 
  Card,
  CardHeader,
  CircularProgress,
  RaisedButton,
  TextField,
} from 'material-ui'
import Lock from 'material-ui/svg-icons/action/lock';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  changePassword,
} from '/imports/ui/state'

const styles = { 
  body: {
    alignItems: 'flex-end',
    padding: '0px 24px 24px 24px',
  },
  buttonRow: {
    alignItems: 'center',
  },
  leftItem: {
    paddingRight: '8px',
  },
  error: {
    color: 'red',
    fontSize: '12px',
    paddingRight: '8px',
  },
  confirm: {
    color: 'green',
    fontSize: '12px',
    paddingRight: '8px',
  },
};

class ChangePasswordCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      confirm: null,
      current: '',
      error: null,
      loading: false,
      new1: '',
      new2: '',
    };
  }

  changePassword() {
    const { changePassword } = this.props
    const { current, new1, new2 } = this.state
    if (new1 !== new2) {
      return this.setState({ error: 'Your passwords must match' })
    }
    this.setState({ confirm: null, error: null, loading: true })
    changePassword(current, new1, (err) => {
      this.setState({ loading: false })
      if (err) {
        this.setState({ confirm: null, error: err.reason })
      } else {
        this.setState({ 
          confirm: 'Your password has been reset!', 
          current: '',
          error: null,
          new1: '',
          new2: '',
        })
      }
    })
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
          <Row style={styles.buttonRow}>
            {this.state.loading && <CircularProgress size={30} style={styles.leftItem} />}
            {this.state.error && <span style={styles.error}>{this.state.error}</span>}
            {this.state.confirm && <span style={styles.confirm}>{this.state.confirm}</span>}
            <RaisedButton
              label='Submit'
              onTouchTap={this.changePassword.bind(this)}
              primary={true}
            />
          </Row>
        </Col>
      </Card>
    );
  }

}

const mapDispatchToProps = (dispatch) => ({
  changePassword: (oldp, newp, done) => dispatch(changePassword(oldp, newp, done)),
})

export default connect(null, mapDispatchToProps)(ChangePasswordCard);
