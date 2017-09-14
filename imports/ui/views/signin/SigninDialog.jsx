import { Col, Row } from 'jsxstyle'
import {
  Dialog,
  RaisedButton,
  TextField,
  CircularProgress,
} from 'material-ui'
import React from 'react'
import { connect } from 'react-redux'

import { Colors } from '/imports/ui/styles'
import {
  setSigninDialogOpen,
  setSigninField,
  signinUser,
} from '/imports/ui/state'

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  dialog: {
    padding: '0px',
  },
  container: {
    height: '400px',
  },
  leftCol: {
    alignItems: 'center',
    backgroundColor: Colors.primary,
    flex: '2',
    height: '100%',
    justifyContent: 'center',
    paddingRight: '24px',
  },
  rightCol: {
    alignItems: 'center',
    backgroundColor: Colors.primaryLight,
    flex: '1',
    height: '100%',
    justifyContent: 'center',
    padding: '0px 24px 0px 24px',
  },
  title: {
    color: 'white',
    fontSize: '38px',
    textAlign: 'center',
    width: '320px',
  },
  textField: {
    color: 'white',
  },
  underlineFocus: {
    borderColor: Colors.secondary,
  },
  hintText: {
    color: Colors.white,
  },
  signinButton: {
    width: '180px',
  },
  error: {
    color: Colors.error,
    height: '20px',
    paddingTop: '12px',
    textAlign: 'center',
  },
  buttonArea: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '60px',
    paddingTop: '8px',
  },
}

const SigninDialog = ({
  closeDialog,
  email,
  open,
  password,
  updateEmail,
  updatePassword,
  signinUser,
  error,
  loading,
}) => (
  <Dialog
    onRequestClose={closeDialog}
    open={open}
    overlayStyle={styles.overlay}
    bodyStyle={styles.dialog}>
    <Row style={styles.container}>
      <Col style={styles.leftCol}>
        <div style={styles.title}>
          Welcome Back to <span style={{fontWeight: 'bold', ...styles.title}}>BoardServeIndy</span>
        </div>
      </Col>
      <Col style={styles.rightCol}>
        <div style={{height:'32px'}}></div>
        <TextField
          hintText='Email Address'
          hintStyle={styles.hintText}
          onChange={(e, v) => updateEmail(v)}
          underlineFocusStyle={styles.underlineFocus}
          style={styles.textField}
          inputStyle={styles.textField}
          value={email} />
        <TextField
          onKeyDown={(e) => e.keyCode === 13 && signinUser()}
          hintText='Password'
          hintStyle={styles.hintText}
          onChange={(e, v) => updatePassword(v)}
          type='password'
          underlineFocusStyle={styles.underlineFocus}
          style={styles.textField}
          inputStyle={styles.textField}
          value={password} />
        <div style={styles.buttonArea}>
          {loading
            ? <CircularProgress color={Colors.secondary} />
            : <RaisedButton
                onTouchTap={signinUser}
                label='Sign In'
                labelColor={Colors.secondaryText}
                backgroundColor={Colors.secondary}
                style={styles.signinButton} />}
        </div>
        {error
          ? <div style={styles.error}>{error}</div>
          : <div style={styles.error}></div>}
      </Col>
    </Row>
  </Dialog>
);

const mapStateToProps = ({ signin }) => ({
  email: signin.email,
  error: signin.error,
  loading: signin.loading,
  open: signin.dialogOpen,
  password: signin.password,
})

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => dispatch(setSigninDialogOpen(false)),
  signinUser: () => dispatch(signinUser()),
  updateEmail: (v) => dispatch(setSigninField('email', v)),
  updatePassword: (v) => dispatch(setSigninField('password', v)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninDialog)
