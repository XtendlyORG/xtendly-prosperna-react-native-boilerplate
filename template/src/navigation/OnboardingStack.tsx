import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { WelcomeScreen } from '@screens'
import { WELCOMESCREEN } from '@constants'
import { Options } from './Options'

const OnboardStack = createStackNavigator()

export const OnboardingStack = () => {
  return (
    <OnboardStack.Navigator
      initialRouteName={WELCOMESCREEN}
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardStack.Screen
        name={WELCOMESCREEN}
        component={WelcomeScreen}
        options={Options}
      />
    </OnboardStack.Navigator>
  )
}
