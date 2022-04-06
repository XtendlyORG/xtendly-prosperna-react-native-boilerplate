import { combineReducers } from 'redux'
import {
  authReducer,
  ordersReducer,
  notificationsReducer,
  dashboardReducer,
} from './slices'

export default combineReducers({
  auth: authReducer,
  orders: ordersReducer,
  notifications: notificationsReducer,
  dashboard: dashboardReducer,
})
