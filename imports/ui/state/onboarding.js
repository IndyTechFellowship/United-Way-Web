import { Meteor } from 'meteor/meteor'

export const SET_ONBOARDING_FIELD = 'SET_ONBOARDING_FIELD';
export const setOnboardingField = (fieldName, fieldValue) => ({
  type: SET_ONBOARDING_FIELD,
  fieldName,
  fieldValue,
})

const initialState = {
  email: '',
  firstName: '',
  lastName: '',
  organizationName: '',
}

export const onboardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ONBOARDING_FIELD:
      return {...state, [action.fieldName]: action.fieldValue};
    default:
      return state
  }
}