import { Accounts } from 'meteor/accounts-base'

export const changePassword = (oldp, newp, done) => (
  () => {
    Accounts.changePassword(oldp, newp, done);
  }
)

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (currentUser) => ({
  type: SET_CURRENT_USER,
  currentUser,
})

const initialState = {
  currentUser: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {...state, currentUser: action.currentUser}
    default:
      return state
  }
}