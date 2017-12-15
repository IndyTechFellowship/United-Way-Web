import _ from 'lodash'
import { Meteor } from 'meteor/meteor'
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

// Import each reducer you create here
import { onboardingReducer } from './onboarding'
import { searchReducer } from './search'
import { signinReducer } from './signin'
import { userReducer } from './user'

// Add them to the combineReducers call below
export const store = createStore(
  combineReducers({
    onboarding: onboardingReducer,
    search: searchReducer,
    signin: signinReducer,
    user: userReducer,
  }), 
  applyMiddleware(
    thunk,
    createLogger()
  ),
)

// And also export everything from each reducer file, 
// as those are the files that contain the actions we are dispatching.
export * from './onboarding'
export * from './search'
export * from './signin'
export * from './user'

// Every action must have a unique name.
// You must also name your reducer something like 'thingReducer' instead of just 'reducer'
// When you need to dispatch an action, its as simple as calling
//  import { setTheThing } from '/imports/ui/state'
//  dispatch(setTheThing('tothething'))