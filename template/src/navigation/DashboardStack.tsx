import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  DashboardScreen,
  StateManagementScreen,
  PlayReduxScreen,
} from '@screens'
import {
  DASHBOARDSCREEN,
  STATEMANAGEMENTSCREEN,
  PLAYREDUXCREEN,
} from '@constants'
import { Options } from './Options'

const DashStack = createStackNavigator()

export const DashboardStack = () => {
  return (
    <DashStack.Navigator
      initialRouteName={DASHBOARDSCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <DashStack.Screen
        name={DASHBOARDSCREEN}
        component={DashboardScreen}
        options={Options}
      />
      <DashStack.Screen
        name={STATEMANAGEMENTSCREEN}
        component={StateManagementScreen}
        options={Options}
      />
      <DashStack.Screen
        name={PLAYREDUXCREEN}
        component={PlayReduxScreen}
        options={Options}
      />
    </DashStack.Navigator>
  )
}
