import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native'
import { AUTHSTACK, ONBOARDSTACK, DASHSTACK } from '@constants'
import { AuthenticationStack, OnboardingStack, DashboardStack } from './index'
import { Options } from './Options'

import { useSelector } from 'react-redux'
import { selectNavigation, navigationActions, useAppDispatch } from '@redux'

const Root = createStackNavigator()

export const navigationRef = createNavigationContainerRef()

export const RootStack = () => {
  const dispatch = useAppDispatch()
  const navigation = useSelector(selectNavigation)

  React.useEffect(() => {
    if (navigationRef.isReady()) {
      dispatch(
        navigationActions.redirect({
          stackName: navigation.currentStack,
          screenName: navigation.currentScreen,
          params: navigation.currentParams,
        }),
      )
    }
  }, [navigationRef])

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
        <Root.Screen
          name={DASHSTACK}
          component={DashboardStack}
          options={Options}
        />
      </Root.Navigator>
    </NavigationContainer>
  )
}
