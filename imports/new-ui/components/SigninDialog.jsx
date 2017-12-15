import React from 'react'
import { connect } from 'react-redux'
import { Button, Dialog, Intent } from '@blueprintjs/core'

import {
  setSigninDialogOpen,
  setSigninField,
  signinUser,
} from '/imports/new-ui/state'

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
    isOpen={open} 
    onClose={closeDialog}
    title={<div>Login</div>}
  >
    <div style={styles.container}>
      { error ? <div style={styles.error} className="pt-callout pt-intent-danger">{error}</div>
              : null
      }
      <label className="pt-label">
        Email
        <input 
          className="pt-input pt-fill"
          type="text"
          placeholder="Email"
          dir="auto"
          onChange={(e, v) => updateEmail(v)}
          value={email}
        />
      </label>
      <label className="pt-label">
        Password
        <input 
          className="pt-input pt-fill"
          type="password"
          placeholder="Password"
          dir="auto"
          onChange={(e, v) => updatePassword(v)}
          value={password}
        />
      </label>
    </div>
    <div className="pt-dialog-footer">
      <div className="pt-dialog-footer-actions">
        <Button text="Cancel" onClick={closeDialog} />
        <Button text="Login" intent={Intent.PRIMARY} onClick={signinUser} />
      </div>
    </div>
  </Dialog>
)

const styles = {
  container: {
    padding: '20px 20px 0 20px'
  },
  error: {
    marginBottom: '10px'
  }
}

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