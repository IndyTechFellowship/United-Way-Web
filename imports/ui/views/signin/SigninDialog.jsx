import { Col, Row } from 'jsxstyle'
import { 
  Dialog,
  RaisedButton,
  TextField,
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
    alignItems: 'center',
    backgroundColor: Colors.primary,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: Colors.primaryLight,
    padding: '40px',
  },
  title: {
    color: 'white',
    fontSize: '30px',
    fontWeight: 'bold',
    margin: '0px 0px 12px 0px',
  },
  textField: {
    color: 'white',
  },
  underlineFocus: {
    borderColor: Colors.secondary,
  },
  hintText: {
    color: Colors.primaryTextLight,
  },
  signinButton: {
    margin: '20px',
    width: '180px',
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
}) => (
  <Dialog
    onRequestClose={closeDialog}
    open={open}
    overlayStyle={styles.overlay}
    bodyStyle={styles.dialog}>
    <Col style={styles.container}>
      <div style={styles.title}>Welcome Back to BoardServe Indy</div>
      <TextField
        hintText='Email Address'
        hintStyle={styles.hintText}
        onChange={(e, v) => updateEmail(v)}
        underlineFocusStyle={styles.underlineFocus}
        style={styles.textField}
        inputStyle={styles.textField}
        value={email} />
      <TextField
        hintText='Password'
        hintStyle={styles.hintText}
        onChange={(e, v) => updatePassword(v)} 
        type='password'
        underlineFocusStyle={styles.underlineFocus}
        style={styles.textField}
        inputStyle={styles.textField}
        value={password} />
      <RaisedButton
        onTouchTap={signinUser}
        label='Sign-In'
        labelColor={Colors.secondaryText}
        backgroundColor={Colors.secondary}
        style={styles.signinButton} />
    </Col>
  </Dialog>
);

const mapStateToProps = ({ signin }) => ({
  email: signin.email,
  error: signin.error,
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