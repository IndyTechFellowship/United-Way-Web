import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

export const createAccount = (cb) => (
  (dispatch, getState) => {
    Accounts.createUser({
      email: getState().onboarding.email,
      password: getState().onboarding.password1,
      profile: {
        firstName: getState().onboarding.firstName,
        lastName: getState().onboarding.lastName,
      },
      token: getState().onboarding.token,
    }, (error) => {
      if (error) return dispatch(setOnboardingError(error.reason));
      else return cb()
    })
  }
);

export const SET_ONBOARDING_FIELD = 'SET_ONBOARDING_FIELD';
export const setOnboardingField = (fieldName, fieldValue) => ({
  type: SET_ONBOARDING_FIELD,
  fieldName,
  fieldValue,
})

export const SET_ONBOARDING_ERROR = 'SET_ONBOARDING_ERROR';
export const setOnboardingError = (error) => ({
  type: SET_ONBOARDING_ERROR,
  error,
})

const initialState = {
  error: null,
  email: '',
  firstName: '',
  lastName: '',
  organizationName: '',
  password1: '',
  password2: '',
  token: '',
}

export const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONBOARDING_ERROR:
      return {...state, error: action.error};
    case SET_ONBOARDING_FIELD:
      return {...state, [action.fieldName]: action.fieldValue};
    default:
      return state
  }
}