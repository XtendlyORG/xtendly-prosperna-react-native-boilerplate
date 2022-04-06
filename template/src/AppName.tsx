import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { RootStack } from '@navigation'

export const AppName = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
