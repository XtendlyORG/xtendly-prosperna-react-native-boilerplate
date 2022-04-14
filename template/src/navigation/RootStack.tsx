import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native'
import { AUTHSTACK, ONBOARDSTACK } from '@constants'
import { AuthenticationStack, OnboardingStack } from './index'
import { Options } from './Options'

const Root = createStackNavigator()

export const navigationRef = createNavigationContainerRef()

export const RootStack = () => {
  return (
    <NavigationContainer ref={navigationRef} independent={true}>
      <Root.Navigator
        initialRouteName={ONBOARDSTACK}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Root.Screen
          name={ONBOARDSTACK}
          component={OnboardingStack}
          options={Options}
        />
        <Root.Screen
          name={AUTHSTACK}
          component={AuthenticationStack}
          options={Options}
        />
      </Root.Navigator>
    </NavigationContainer>
  )
}
