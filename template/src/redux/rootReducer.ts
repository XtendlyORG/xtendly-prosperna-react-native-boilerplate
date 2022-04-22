import { combineReducers } from 'redux'
import {
  authenticationReducer,
  navigationReducer,
  sampleReducer,
} from './slices'

export default combineReducers({
  navigation: navigationReducer,
  authentication: authenticationReducer,
  sample: sampleReducer,
})
