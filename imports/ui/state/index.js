import _ from 'lodash'
import {
  applyMiddleware,
  createStore,
  combineReducers,
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const middleware = _.compact([
  applyMiddleware(thunk),
  Meteor.isDevelopment() ? applyMiddleware(logger) : null,
])

// Import each reducer you create here
import { searchReducer } from './search'

// Add them to the combineReducers call below
export const store = createStore(
  combineReducers({
    search: searchReducer,
  }), 
  middleware,
)

// And also export everything from each reducer file, 
// as those are the files that contain the actions we are dispatching.
export * from './search'

// Every action must have a unique name.
// You must also name your reducer something like 'thingReducer' instead of just 'reducer'
// When you need to dispatch an action, its as simple as calling
//  import { setTheThing } from '/imports/ui/state'
//  dispatch(setTheThing('tothething'))