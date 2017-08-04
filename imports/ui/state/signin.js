import { Meteor } from 'meteor/meteor'

export const SET_SIGNIN_DIALOG_OPEN = 'SET_SIGNIN_DIALOG_OPEN';
export const setSigninDialogOpen = (open) => ({
  type: SET_SIGNIN_DIALOG_OPEN,
  open,
})

const initialState = {
  dialogOpen: false,
}

export const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN_DIALOG_OPEN:
      return {...state, dialogOpen: action.open};
    default:
      return state
  }
}