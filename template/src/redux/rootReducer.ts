import { combineReducers } from 'redux'
import { authenticationReducer } from './slices'

export default combineReducers({
  authentication: authenticationReducer,
})
