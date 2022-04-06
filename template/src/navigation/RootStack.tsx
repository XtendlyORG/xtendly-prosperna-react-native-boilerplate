import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native'
import { AUTHSTACK } from '@constants'
import { AuthenticationStack } from './index'
import { Options } from './Options'

const Root = createStackNavigator()

export const navigationRef = createNavigationContainerRef()

export const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Root.Navigator
        initialRouteName={AUTHSTACK}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Root.Screen
          name={AUTHSTACK}
          component={AuthenticationStack}
          options={Options}
        />
      </Root.Navigator>
    </NavigationContainer>
  )
}
