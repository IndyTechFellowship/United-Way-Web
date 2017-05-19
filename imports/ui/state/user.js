import { Meteor } from 'meteor/meteor'

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  user,
})

const initialState = {
  user: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {...state, user: action.user}
    default:
      return state
  }
}