import { Dialog } from 'material-ui'
import React from 'react'
import { connect } from 'react-redux'

import { setSigninDialogOpen } from '/imports/ui/state'

const SigninDialog = ({ open, closeDialog }) => (
  <Dialog
    onRequestClose={closeDialog}
    open={open}>
    <h1>Test!</h1>
  </Dialog>
);

const mapStateToProps = ({ signin }) => ({
  open: signin.dialogOpen,
})

const mapDispatchToProps = (dispatch) => ({
  closeDialog: () => dispatch(setSigninDialogOpen(false)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SigninDialog)