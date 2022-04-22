import React from 'react'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import {
  useFlipper,
  useReduxDevToolsExtension,
} from '@react-navigation/devtools'

import { RootStack } from '@navigation'

export const AppName = () => {
  const navigationRef = useNavigationContainerRef()
  useFlipper(navigationRef)
  useReduxDevToolsExtension(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  )
}
