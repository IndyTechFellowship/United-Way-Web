import { Meteor } from 'meteor/meteor'

export const signinUser = () => (
  (dispatch, getState) => {
    Meteor.loginWithPassword(
      getState().signin.email,
      getState().signin.password,
      (err) => {
        if (err) dispatch(setSigninError(err.reason));
        else dispatch(setSigninDialogOpen(false));
      }
    );
  }
)

export const SET_SIGNIN_DIALOG_OPEN = 'SET_SIGNIN_DIALOG_OPEN';
export const setSigninDialogOpen = (open) => ({
  type: SET_SIGNIN_DIALOG_OPEN,
  open,
})

export const SET_SIGNIN_ERROR = 'SET_SIGNIN_ERROR';
export const setSigninError = (err) => ({
  type: SET_SIGNIN_ERROR,
  error: err,
})

export const SET_SIGNIN_FIELD = 'SET_SIGNIN_FIELD';
export const setSigninField = (field, value) => ({
  type: SET_SIGNIN_FIELD,
  field,
  value,
})

const initialState = {
  dialogOpen: false,
  error: null,
  email: '',
  password: '',
}

export const signinReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGNIN_DIALOG_OPEN:
      return {...state, dialogOpen: action.open};
    case SET_SIGNIN_ERROR:
      return {...state, error: action.error};
    case SET_SIGNIN_FIELD:
      return {...state, [action.field]: action.value};
    default:
      return state
  }
}