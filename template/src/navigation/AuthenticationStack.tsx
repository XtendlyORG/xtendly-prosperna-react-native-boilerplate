import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen } from '@screens'
import { LOGINSCREEN } from '@constants'
import { Options } from './Options'

const AuthStack = createStackNavigator()

export const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={LOGINSCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen
        name={LOGINSCREEN}
        component={LoginScreen}
        options={Options}
      />
    </AuthStack.Navigator>
  )
}
